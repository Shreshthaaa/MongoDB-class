const productModel = require("../models/product")

exports.createProducts = async(req, res) =>{
    
    const product = await  productModel.create({
        product_name : req.body.product_name,
        product_price : req.body.product_price,
        isInStock : req.body.isInStock,
        category: req.body.category
    })
    console.log(product)

    return res.status(201).json({message:"Product created"});
}

exports.getallProducts = async(req, res) =>{
    const allProducts = await productModel.find({isInStock:true})
    return res.json(allProducts)
}

exports.getById = async(req,res) =>{
    const product =await productModel.findById(req.params.id)

    return res.json(product)
}



exports.updateProduct = async(req, res) =>{
    const updatedProduct= await productModel.findByIdAndUpdate(req.params.id, req.body)
    return res.json(updatedProduct)
}


exports.deleteProduct = async(req,res)=>{
    const delectedProduct = await productModel.findByIdAndDelete(req.params.id)
    res.json(delectedProduct)
}