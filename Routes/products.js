import express from 'express'
const router = express.Router()
import { PRODUCTS } from '../constants.js'

router.get('/', (req, res) => {
    res.send({Products: PRODUCTS })
})

export default router