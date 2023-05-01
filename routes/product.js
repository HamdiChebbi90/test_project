const express = require('express');
const router = express.Router();

const Product = require('../models/Product');
const multer = require('multer');
filenameimg = '';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/products')
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
      }
    })
  
  const upload = multer({ storage: storage })

router.post('/create', upload.single('image'), async (req, res) => {
    let data = req.body;
    const product = new Product(data);
    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/get', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err) {
        res.json({ message: err });
    }
});

//get by category
router.get('/get/category/:category', async (req, res) => {
    try {
        const product = await Product.find({category:req.params.category});
        res.json(product);
    } catch (err) {
        res.json({ message: err });
    }
});

//get by title
router.get('/get/title/:title', async (req, res) => {
    try {
        const product = await Product.find({title:req.params.title});
        res.json(product);
    } catch (err) {
        res.json({ message: err });
    }
});



router.delete('/delete/:id', async (req, res) => {
  let id = req.params.id;
    try {
        const product = await Product.findByIdAndDelete(id);
        res.json(product);
    } catch (err) {
        res.json({ message: err });
    }
});

//router.put
router.put('/update/:id', async (req, res) => {
    let id = req.params.id;
    let data = req.body;
        
    try {
        const updateProduct = await Product.updateOne(
            { _id: id },
            { $set: data }
        );
        res.json(updateProduct);
    } catch (err) {
        res.json({ message: err });
    }
});





module.exports = router;