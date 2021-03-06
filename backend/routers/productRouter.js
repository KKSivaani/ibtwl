import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';



const productRouter = express.Router();


productRouter.get(
  '/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);//list of products to frontend 

productRouter.get( 
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);//create products

productRouter.get( //api for product details
  '/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } 
    else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);
export default productRouter;