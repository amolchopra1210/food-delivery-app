import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";

const MenuCard = ({ name, imgSrc }) => {
  return (
    <div className="rowMenuCard">
      <div className="imgBox">
        <img src={imgSrc} alt="menuimage" />
      </div>
      <h3>{name}</h3>
      <i className="loadMenu">
        <ChevronRightRounded />
      </i>
    </div>
  );
};

export default MenuCard;
