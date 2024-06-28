import express from 'express'
import { explorePopularRepos } from '../controllers/explore.controller.js'
import { ensureAuth } from '../middleware/ensureAuth.js';


const router = express.Router();

router.get('/repos/:language', ensureAuth, explorePopularRepos)

export default router;