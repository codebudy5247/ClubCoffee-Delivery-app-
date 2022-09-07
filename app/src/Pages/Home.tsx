import React from "react";
import { products } from "../_mock/_products";
import ProductList from "../Components/ProductList";
import { Container, Typography, Stack } from "@mui/material";

const Home = () => {

  return (
    <Container maxWidth="lg" sx={{mt:5}}>
      <ProductList products={products} loading={!products.length} />
    </Container>
  );
};

export default Home;
