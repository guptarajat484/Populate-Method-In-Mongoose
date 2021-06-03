const express=require('express')
const router=express.Router()
const Album = require('../models/albums')
const User=require('../models/userModel')
router.post('/', async (req,res)=>{
    console.log(req.body);
    const {title,author}=req.body;
    const album = new Album({
        title,author
    })
    const savedalbum = await album.save();
    res.send({savedalbum});
})

router.get('/:title',async( req, res) => {
    console.log(req.params);
    const album = await Album.find({title:req.params.title})
    .populate('author', 'name email -_id');
    console.log(album);
    res.send(album);
})
module.exports=router
