import React, { useEffect, useState } from "react";
import ProductList from "../Components/ProductList";
import { Container } from "@mui/material";
import * as Api from "../Services/Api";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error,setError] = useState<string>()
  useEffect(() => {
    const init = async () => {
      const [error, response] = await Api.getproducts();
      if(error){
        setError(error?.data)
      }
      setProducts(response?.data?.products);
    };
    init();
  }, []);
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 5, mb: 5,height:'100vh'}}>
        <ProductList products={products} loading={!products?.length} error={error!} />
      </Container>
    </>
  );
};

export default Home;
