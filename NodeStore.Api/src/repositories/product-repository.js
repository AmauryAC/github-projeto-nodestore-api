'use strict'

// const mongoose = require('mongoose');
// const Product = mongoose.model('Product');

const Product = require('../models/product');

exports.get = async() => {
    return await Product.find({ 
        active: true 
    }, 'title price slug');
}

exports.getById = async(id) => {
    return await Product.findById(id);
}

exports.getBySlug = async(slug) => {
    return await Product.findOne({ 
        slug: slug, 
        active: true 
    }, 'title description price slug tags')
}

exports.getByTag = async(tag) => {
    return await Product.find({ 
        tags: tag, active: true 
    }, 'title description price slug tags')
}

exports.create = async(data) => {
    let product = new Product(data);

    await product.save();
}

exports.update = async(id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price,
            slug: data.slug          
        }
    });
}

exports.delete = async(id) => {
    await Product.findByIdAndRemove(id);
}