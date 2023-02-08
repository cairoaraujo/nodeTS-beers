import {Router} from 'express'
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController'

const router = Router();

router.get('/', PageController.home);

router.get('/ipa',PageController.ipa);
router.get('/apa',PageController.apa);
router.get('/pilsen',PageController.pilsen);
router.get('/witbier',PageController.witbier);

router.get('/search',SearchController.search);

export default router;