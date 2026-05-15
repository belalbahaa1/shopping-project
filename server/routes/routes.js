import express from "express";
import { Router } from "express";
import Product from "../models/productModel.js";

const router = Router();

router.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.post("/api/products", async (req, res) => {
  console.log("POST request received at /api/products with body:", req.body);
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

router.delete("/api/product/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

export default router;
