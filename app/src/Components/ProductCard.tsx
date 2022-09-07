import { Product } from "../@types/Product";
import {
  Box,
  Card,
  Link,
  Typography,
  Stack,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import image from "../Images/1.jpg";
import Iconify from "../Components/Iconify";
type Props = {
  product: any;
};

type IncrementerProps = {
  name: string;
  quantity: number;
  available: number;
  onIncrementQuantity: VoidFunction;
  onDecrementQuantity: VoidFunction;
};

function Incrementer({
  available,
  quantity,
  onIncrementQuantity,
  onDecrementQuantity,
}: IncrementerProps) {
  return (
    <Box
      sx={{
        py: 0.5,
        px: 0.75,
        border: 1,
        lineHeight: 0,
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        borderColor: "grey.50032",
      }}
    >
      <IconButton
        size="small"
        color="inherit"
        disabled={quantity <= 1}
        onClick={onDecrementQuantity}
      >
        <Iconify icon={"eva:minus-fill"} width={14} height={14} />
      </IconButton>

      <Typography
        variant="body2"
        component="span"
        sx={{ width: 40, textAlign: "center" }}
      >
        {quantity}
      </Typography>

      <IconButton
        size="small"
        color="inherit"
        disabled={quantity >= available}
        onClick={onIncrementQuantity}
      >
        <Iconify icon={"eva:plus-fill"} width={14} height={14} />
      </IconButton>
    </Box>
  );
}

const ProductCard = ({ product }: Props) => {
  const { title, price } = product;
  return (
    <Card>
      <Box sx={{ position: "relative" }}>
        <img alt="tuyfruyt" src={image} />
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="subtitle2" noWrap>
              {title}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">{price}</Typography>
          </Box>
        </Box>

        {/* <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
            Quantity
          </Typography>

          <div>
            <Incrementer
              name="quantity"
              quantity={values.quantity}
              available={available}
              onIncrementQuantity={() => setValue('quantity', values.quantity + 1)}
              onDecrementQuantity={() => setValue('quantity', values.quantity - 1)}
            />
            <Typography
              variant="caption"
              component="div"
              sx={{ mt: 1, textAlign: 'right', color: 'text.secondary' }}
            >
              Available:35
            </Typography>
          </div>
        </Stack> */}

        {/* <Divider sx={{ borderStyle: 'dashed' }} /> */}

        <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
          <Button
            // fullWidth
            // disabled={}
            size="small"
            color="warning"
            variant="contained"
            // startIcon={<Iconify icon={'ic:round-add-shopping-cart'} />}
            // onClick={handleAddCart}
            sx={{ whiteSpace: "nowrap" }}
          >
            {<Iconify icon={"ic:round-add-shopping-cart"} />}
          </Button>

          <Button fullWidth size="small" type="submit" variant="contained">
            Buy Now
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProductCard;
