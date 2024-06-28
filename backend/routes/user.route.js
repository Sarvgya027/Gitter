import express from 'express'
import {getLikes, getUserProfileAndRepos, likeProfile} from '../controllers/user.controller.js'
import { ensureAuth } from '../middleware/ensureAuth.js';


const router = express.Router();

router.get('/profile/:username', getUserProfileAndRepos );

router.get('/likes', ensureAuth, getLikes)

router.post('like:username', ensureAuth, likeProfile)


export default router;