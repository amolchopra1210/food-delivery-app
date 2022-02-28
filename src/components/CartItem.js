import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React from "react";

export default function Cartitem({ name, imgSrc, qty, price }) {
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
            <RemoveRounded className="itemRemove" />
            <AddRounded className="itemAdd" />
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
