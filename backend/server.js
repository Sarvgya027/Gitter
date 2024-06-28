import express from "express";
import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/user.explore.js";
import authRoutes from "./routes/user.auth.js";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import "./passport/github.auth.js";
import passport from "passport";
import session from "express-session";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
// app.use(express.static(__dirname + '/public'));

app.use(cors());

dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  connectDB();
  console.log("server sarted");
});
