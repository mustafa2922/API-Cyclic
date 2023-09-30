import express from 'express'
const router = express.Router()
import { PRODUCTS } from '../constants.js'
// controler
router.get('/', (req, res) => {
    res.send({Products: PRODUCTS })
})

export default router