const mongoose = require('mongoose');
const productSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique:true
        },
        desc: {
            type: String,
            required: true,
           
        },
        category: {
            type: Array,
        },
        price: {
            type: Number,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        
    },

    { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);