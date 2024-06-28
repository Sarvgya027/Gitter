import express from 'express'
import {getUserProfileAndRepos} from '../controllers/user.controller.js'


const router = express.Router();

router.get('/profile/:username', getUserProfileAndRepos );
// todo => likes (get)
// todo => like a profile (post)


export default router;