import passport from "passport";
import dotenv from "dotenv";
import User from "../models/user.model.js";
import { Strategy as GitHubStrategy } from "passport-github2";

dotenv.config();

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Use the GitHubStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and GitHub
//   profile), and invoke a callback with a user object.
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      // callbackURL: "/api/auth/github/callback",
      callbackURL: `/api/auth/github/callback`,
    },

    async function (accessToken, refreshToken, profile, done) {
      const user = await User.findOne({ username: profile.username });

      //signup
      if (!user) {
        console.log("Creating new user:", profile.username); // Add this line
        const newUser = new User({
          name: profile.displayName,
          username: profile.username,
          profileURL: profile.profileUrl,
          avatarURL: profile.photos[0].value,
          likeProfiles: [],
          likedBy: [],
        });
        await newUser.save();
        done(null, newUser);
      } else {
        console.log("Existing user:", profile.username); // Add this line
        done(null, user);
      }
    }
  )
);

export default passport;
