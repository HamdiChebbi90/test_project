const express = require('express');
const router = express.Router();
const multer = require('multer');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


filename = '';
const storage = multer.diskStorage({
    destination:'./uploads/users',
    
    filename: function (req, file, cb) {
        filename = file.fieldname + '-' + Date.now() + '.jpg';
        cb(null, filename);

    }


});

const upload = multer({ storage: storage });



router.post('/register', upload.any('image') , async (req, res) => {
    
   
    data = req.body;
    user = new User(data);
    user.img = filename;

    salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(data.password, salt);
    
    try {
        const savedUser = await user.save();
        filename = '';
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/login', async (req, res) => {
    
    let data = req.body;
    User.findOne ({ email: data.email })
        .then((user) => { 
            let valid = bcrypt.compareSync(data.password, user.password);
            if (!valid) {
                res.send({ message: 'invalid user' });
            }
            else {
                let playload = {
                     _id: user._id,
                    username: user.username,
                    email: user.email,
                   
                 }
                 let token = jwt.sign(playload, 'secret', { expiresIn: '1h' });
                    res.send({ message: 'valid user', token: token });
                    

            }
        })


        .catch((err) => {
            
            res.send({ message: 'invalid user' });
        })
});





router.get('/get', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

// getimage by id




router.get('/:userId', async (req, res) => {
    try { 
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await User.remove({ _id: req.params.userId });
        res.json(removedUser);
    } catch (err) {
        res.json({ message: err });
    }
});


router.put('/:userId', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.userId },
            { $set: { username: req.body.username } }
        );
        res.json(updatedUser);
    } catch (err) {
        res.json({ message: err });
    }
});





module.exports = router;