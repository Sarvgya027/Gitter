import express from "express"
import userRoutes from "./routes/user.route.js"
import exploreRoutes from "./routes/user.explore.js"
import authRoutes from "./routes/user.auth.js"
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./db/connectDB.js"
import "./passport/github.auth.js"
import passport from 'passport'
import session from "express-session"

const app = express();

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
// app.use(express.static(__dirname + '/public'));


app.use(cors());

dotenv.config();

app.use('/api/auth', authRoutes)
app.use("/api/users", userRoutes)
app.use('/api/explore', exploreRoutes)


app.listen(5000, () => {
  connectDB();
  console.log('server sarted')
})