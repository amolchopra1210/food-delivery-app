import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
let cartItems = [];

export default function Cartitem({ name, imgSrc, price, itemId }) {
  const [qty, setQty] = useState(1);
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    cartItems = cart;
  }, [cart]);

  const updateQuantity = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
    } else {
      if (qty == 1) {
      }
      setQty(qty - 1);
    }
  };
  return (
    <div className="cartItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateQuantity("remove", itemId)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateQuantity("add", itemId)}
            />
          </div>
        </div>
      </div>
      <div className="itemPrice">
        <span className="dollarSign">$</span>
        <span className="itemPriceValue">{price}</span>
      </div>
    </div>
  );
}
