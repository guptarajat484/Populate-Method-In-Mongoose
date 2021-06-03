const express=require('express')
const router=express.Router()
const User = require('../models/userModel')
router.post('/', async (req,res)=>{
    const {name,email}=req.body;
    const user = new User({
        name, email
    })
    const savedUser = await user.save();
    res.send({savedUser});
})

router.get('/:id',async( req, res) => {
    console.log()
    const user = await User.find({_id:req.params.id});
    res.send({user})
})
module.exports=router
