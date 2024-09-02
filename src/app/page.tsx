"use client";

import { IconButton, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import ItemCart from "./item-cart";

export default function Home() {
  const [total, setTotal] = React.useState(0);
  
  const updateTotal = (amount: number) => {
    setTotal(prevTotal => prevTotal + amount);
  };
  const myItems = [
    { itemname: "iPhone15", 
      price: 32900, 
      image: "/iphone15.webp"},
    { itemname: "iPhone15 Pro", 
      price: 41900, 
      image: "/iphone15ProMax.webp"},
    { itemname: "iPad Pro", 
      price: 39990, 
      image: "/iPadPro.webp"},
    { itemname: "iPad Air", 
      price: 23900, 
      image: "/iPadAir.webp"},
    { itemname: "iPad", 
      price: 13900, 
      image: "/iPad.png"},
    { itemname: "iPad Mini", 
      price: 19900, 
      image: "/iPadMini.jpg"},
    { itemname: "MacBook Air", 
      price: 34900, 
      image: "/MacBookAir.jpg"},
    { itemname: "MacBookPro", 
      price: 59900, 
      image: "/MacBookPro.jpg"},
    { itemname: "iMac", 
      price: 49900, 
      image: "/imac.jpg"},
    { itemname: "Mac Mini", 
      price: 20900, 
      image: "/macmini.jpg"},
    { itemname: "Mac Studio", 
      price: 74900, 
      image: "/macstudio.jpg"},
  ];
  const formatNumber = (num: number): string => num.toLocaleString('th-TH');
  return (
    <div>
      <h1>Apple Cart</h1>
      {/* loop all array object */}
      {myItems &&
        myItems.map((item) => (
          <ItemCart
            itemImage={item.image}
            itemname={item.itemname}
            itemPrice={item.price}
            updateTotal={updateTotal}
          />
        ))}
      <Stack direction="row" spacing={2}>
        <Typography variant="h4">Total Price</Typography>
        <Typography variant="h4">{formatNumber(total)} THB</Typography>
      </Stack>
    </div>
  );
}
