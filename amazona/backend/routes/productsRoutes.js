import express from 'express';
import Product from '../models/productModel';
import { isAdmin, isAuth } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found.' });
    }
});

router.post('/', isAuth, isAdmin, async(req, res) => {
    const { name, image, brand, price, category, countInStock, description, rating, numReviews } = req.body;
    const product = new Product({
        name, image, brand, price, category, countInStock, description, rating, numReviews
    });

    const newProduct = await product.save();

    if(newProduct) {
        return res.status(201).send({message: 'New Product Created!', data:newProduct });
    }
    return res.status(500).send({message: 'Error in Creating Product.'})
})

router.put('/:id', isAuth, isAdmin, async(req, res) => {
    const { name, image, brand, price, category, countInStock, description } = req.body;
    const productId = req.params.id;
    const product = await Product.findOne({_id: productId});
    if(!!product) {
        product.name = name; 
        product.image = image; 
        product.brand = brand;
        product.price = price;
        product.category = category;
        product.countInStock = countInStock;
        product.description = description;
        const updatedProduct = await product.save();
    
        if(updatedProduct) {
            return res.status(200).send({message: 'Product Updated!', data:updatedProduct });
        }
    }
    return res.status(500).send({message: 'Error in Updating Product.'})
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findByIdAndDelete({_id: productId});

    if(product){
        return res.status(200).send({ message: 'Product Deleted!', data:product });
    }

    return res.status(500).send({ message: 'Error in Deleting Product.' })
})

export default router;
