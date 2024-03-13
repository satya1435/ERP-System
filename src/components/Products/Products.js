import React, { useState } from "react";
import { Button, Container, Typography, Box } from "@mui/joy";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import { mockData } from "./productsData";

const Products = () => {
  const [products, setProducts] = useState(mockData);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  const handleSubmit = (formData) => {
    if (selectedProduct) {
      // Edit existing product
      setProducts(
        products.map((product) =>
          product.id === selectedProduct.id ? formData : product
        )
      );
    } else {
      // Add new product
      const newProduct = { id: Date.now(), ...formData };
      setProducts([...products, newProduct]);
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography level="h2" gutterBottom textColor={'var(--text-color-primary)'}>
          Products Management
        </Typography>
        <Button onClick={() => setOpenDialog(true)}>Add Product</Button>
      </Box>
      <ProductList
        products={products}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <ProductForm
        open={openDialog}
        onClose={handleCloseDialog}
        onSubmit={handleSubmit}
        selectedProduct={selectedProduct}
      />
    </Container>
  );
};

export default Products;
