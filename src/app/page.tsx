"use client";

import { Stack, Typography } from "@mui/material";
import React from "react";
import ItemCart from "./item-cart";

export default function Home() {
  const [total, setTotal] = React.useState(0);
  
  const updateTotal = (amount: number) => {
    setTotal(prevTotal => prevTotal + amount);
  };

  // เพิ่ม id สำหรับแต่ละรายการ
  const myItems = [
    { id: 1, itemname: "iPhone15", price: 32900, image: "/iPhone15.webp" },
    { id: 2, itemname: "iPhone15 Pro", price: 41900, image: "/iPhone15ProMax.webp" },
    { id: 3, itemname: "iPad Pro", price: 39990, image: "/iPadPro.webp" },
    { id: 4, itemname: "iPad Air", price: 23900, image: "/iPadAir.webp" },
    { id: 5, itemname: "iPad", price: 13900, image: "/iPad.png" },
    { id: 6, itemname: "iPad Mini", price: 19900, image: "/iPadMini.jpg" },
    { id: 7, itemname: "MacBook Air", price: 34900, image: "/MacBookAir.jpg" },
    { id: 8, itemname: "MacBookPro", price: 59900, image: "/MacBookPro.jpg" },
    { id: 9, itemname: "iMac", price: 49900, image: "/imac.jpg" },
    { id: 10, itemname: "Mac Mini", price: 20900, image: "/macmini.jpg" },
    { id: 11, itemname: "Mac Studio", price: 74900, image: "/macstudio.jpg" },
  ];

  // ฟังก์ชันจัดรูปแบบตัวเลข
  const formatNumber = (num: number): string => num.toLocaleString('th-TH');

  return (
    <div>
      <h1>Apple Cart</h1>
      {myItems.map((item) => (
        <ItemCart
          key={item.id}  // ใช้ id เป็น key
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
