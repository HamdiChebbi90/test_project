const express = require('express');
const router = express.Router();

const Cart = require('../models/Cart');

router.post('/create', async (req, res) => {
    let data = req.body;
    const cart = new Cart(data);
    try {
        const savedCart = await cart.save();
        res.json(savedCart);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/get', async (req, res) => {
    try {
        const carts = await Cart.find();
        res.json(carts);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/delete/:id', async (req, res) => {
    let id = req.params.id;
    try {
        const cart = await Cart.findByIdAndDelete(id);
        res.json(cart);
    } catch (err) {
        res.json({ message: err });
    }

});

router.get('/:userId', async (req, res) => {
    try {
        const cart = await Cart.find({ userId: req.params.userId });
        res.json(cart);
    } catch (err) {
        res.json({ message: err });
    }

});

router.put('/:userId', async (req, res) => {
    try {
        const updatedCart = await Cart.updateOne(
            { userId: req.params.userId },
            { $set: { products: req.body.products } }
        );
        res.json(updatedCart);
    } catch (err) {
        res.json({ message: err });
    }

});

router.put('/update/:id', async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    try {
        const updatedCart = await Cart.updateOne(
            { _id: id },
            { $set: data }
        );
        res.json(updatedCart);
    } catch (err) {
        res.json({ message: err });
    }

});







module.exports = router;