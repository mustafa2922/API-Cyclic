import express from 'express';
import user from './user.js'
import product from './products.js'

const router = express.Router();

router.use('/user',user)
router.use('/products',product)


export default router;