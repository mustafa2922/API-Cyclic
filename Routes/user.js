import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';
import joi from 'joi';

const router = express.Router()

const userShecma = joi.object({
    name:joi.string().required().min(10),
    email:joi.string().email().required(),
    phone:joi.number().optional().min(11),
    password:joi.string().required().min(6)
})

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
    const password = await bcrypt.hash(req.body.password,10)
    console.log("req--->",req.body);
    const user = new User({...req.body,password});
    user.save()
    res.status(200).send({status:200 ,message:"success",user:user});
})

router.post('/signUp',async (req,res)=>{
    try{
        await userShecma.validateAsync(req.body);
        res.status(200).send({status:200,message:"success"})
    }
    catch(err){
        return res.status(400).send({status:400 , message:'Invalid request!', errors: err.message   })
    }
})

router.post('/login',async (req,res)=>{
    const user = await User.findOne({email:req.body.email})
    .then(res=>res.toObject())
    const compare = await bcrypt.compare(req.body.password,user.password)
    console.log("compare---->",compare)
    console.log("user--->",user)
    delete user.password;
    const token = jwt.sign({_id:user._id,email:user.email},"MUSTAFA")
    res.status(200).send({status:200 ,message:"success",token,user:user});
})

export default router