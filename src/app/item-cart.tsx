import React from "react";
import { IconButton, Stack, Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ItemCartProps {
  itemname: string;
  itemPrice: number;
  itemImage: string;
  updateTotal: (amount: number) => void;
}

const ItemCart: React.FC<ItemCartProps> = ({
  itemname,
  itemPrice,
  itemImage,
  updateTotal
}) => {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    const newTotalPrice = newCount * itemPrice;
    setTotalPrice(newTotalPrice);
    updateTotal(itemPrice);
  };

  const handleRemoveItemClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      const newTotalPrice = newCount * itemPrice;
      setTotalPrice(newTotalPrice);
      updateTotal(-itemPrice);
    }
  };

  return (
    <Card sx={{ display: 'flex', marginBottom: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, borderRadius: 1, objectFit: 'cover' }}
        image={itemImage}
        alt={itemname}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2, flex: 1 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {itemname}
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" marginTop={1}>
            <IconButton onClick={handleRemoveItemClick} disabled={count <= 0}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="h6">{count}</Typography>
            <IconButton onClick={handleAddItemClick}>
              <AddIcon />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {totalPrice.toLocaleString()} THB
            </Typography>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ItemCart;
