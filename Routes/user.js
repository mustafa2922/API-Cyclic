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

router.post('/',(req,res)=>{
    console.log("req--->",req.body)
    res.status(200).send({status:200 ,message:"success"})
})

export default router