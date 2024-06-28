import express from "express";
import { Passport } from "passport";
import passport from '../passport/github.auth.js'
import { ensureAuth } from "../middleware/ensureAuth.js";


const router = express.Router();

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get("/github/callback", passport.authenticate('github', { failureRedirect: process.env.CLIENT_BASE_URL+'/login' }),
function(req, res) {
  res.redirect(process.env.CLIENT_BASE_URL);
});



router.get('/check', ensureAuth, (req, res) => {
  if(req.isAuthenticated()){
    // console.log('Authenticated user:', req.user); // Add this line
    // res.send({user:req.user})
    return res.json({ user: req.user });

  } else {
    // console.log('User not authenticated'); // Add this line
    // res.send({user:null})
    return res.json({ user: null });
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.json({message: 'Logged out'})
  })
})


export default router;
