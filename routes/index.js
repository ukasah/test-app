const express = require('express');
const router = express.Router();
const product = require('../controller/product');
const supplier = require('../controller/supplier');
const component = require('../controller/component');


router.get('/', (req, res) => {
    return res.status(200).json({
        message: 'HOMEPAGE'
    });
}); // get all channel

//ENDPOINT PRODUCT
router.get('/products', product.index); // get all products
router.get('/products/:id', product.show); // get products by id
router.post('/products', product.store); // create data products
router.put('/products/:id', product.update); // update data products by id
router.delete('/products/:id', product.destroy); // hdelete data products by id

//ENDPOINT SUPPLIER
router.get('/suppliers', supplier.index); // get all products
router.get('/suppliers/:id', supplier.show); // get products by id
router.post('/suppliers', supplier.store); // create data products
router.put('/suppliers/:id', supplier.update); // update data products by id
router.delete('/suppliers/:id', supplier.destroy); // hdelete data products by id

//ENDPOINT COMPONENT
router.get('/components', component.index); // get all products
router.get('/components/:id', component.show); // get products by id
router.post('/components', component.store); // create data products
router.put('/components/:id', component.update); // update data products by id
router.delete('/components/:id', component.destroy); // hdelete data products by id

module.exports = router;