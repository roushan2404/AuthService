const express= require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'products fetched'
    });
});

router.post('/',(req,res,next)=>{
    debugger;
    const product={
        name: req.body.name,
        email:req.body.email
    }
    res.status(200).json({
        message:'inserted',
        createdProduct:product

    });
});
//works products
module.exports=router;