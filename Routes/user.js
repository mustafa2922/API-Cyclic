import express from 'express'
const router = express.Router()

const users = [
    {
        id: 1,
        name: "mustafa",
        email: "mustafaraza@gmail.com"
    },
    {
        id: '2',
        name: "ali",
        email: "ali@gmail.com"
    }
]

router.get('/', (req, res) => {
    res.send({user: users })
})

export default router