const express = require('express')
const router = express.Router()
const productControllers = require("../controllers/productControllers")


// create
router.post('/', productControllers.createProducts);


// get route
router.get('/',productControllers.getallProducts)

// Get product by id

router.get('/:id' , productControllers.getById)


// Update Product 
router.put('/:id', productControllers.updateProduct)


// delet Product
router.delete('/:id', productControllers.deleteProduct)

module.exports = router;
