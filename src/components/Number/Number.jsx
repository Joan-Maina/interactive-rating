import React, { useContext, useState } from "react";
import { DataContext } from "../../DataContext";
import "../Number/Number.css";

function Number({ number, selectednumber }) {
  const { setSelectednumber } = useContext(DataContext);
  const onNumberclick = (e, number) => {
    e.preventDefault();
    setSelectednumber(number);
  };

  return (
    <div
      className={`${selectednumber === number ? "selected" : "number"}`}
      onClick={(e) => onNumberclick(e, number)}
    >
      {number}
    </div>
  );
}

export default Number;
