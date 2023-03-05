"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        msg: "get products"
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "Get product",
        id
    });
};
exports.getProduct = getProduct;
const deleteProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "Delete product",
        id
    });
};
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => {
    const { body } = req;
    res.json({
        msg: "Post product",
        body
    });
};
exports.postProduct = postProduct;
const updateProduct = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "Update product",
        id,
        body
    });
};
exports.updateProduct = updateProduct;
