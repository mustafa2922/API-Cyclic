import express from 'express'
import User from '../models/User.js'
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

router.post('/',async (req,res)=>{
    console.log("req--->",req.body);
    const user = new User(req.body);
    user.save(  )
    res.status(200).send({status:200 ,message:"success"});
})

export default router