import React from "react";
import { products } from "../_mock/_products";
import ProductList from "../Components/ProductList";
import { Container} from "@mui/material";
import Banner from "../Components/Banner";
const Home = () => {

  return (
    <>
     {/* <Banner /> */}
     <Container maxWidth="lg" sx={{mt:5}}>
      <ProductList products={products} loading={!products.length} />
    </Container>
    </>
    
  );
};

export default Home;
