import { Router } from 'express';

// // Routes
import index from './home';
import serverHosts from './server-hosts';

const router = new Router();

router.get(['*'], index);
// Additional routes
router.use([serverHosts]);


module.exports = router;
