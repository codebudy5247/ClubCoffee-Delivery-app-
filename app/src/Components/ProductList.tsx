import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import SkeletonProductItem from "./SkeletonProductItem";
import { Product } from "../@types/Product";

type Props = {
  products: any;
  loading: boolean;
};
const ProductList = ({ products, loading }: Props) => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        },
      }}
    >
      {(loading ? [...Array(12)] : products).map((product: any, index: any) =>
        product ? (
          <ProductCard key={product.id} product={product} />
        ) : (
          <SkeletonProductItem key={index} />
        )
      )}
    </Box>
  );
};

export default ProductList;
