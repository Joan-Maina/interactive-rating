import React, { useContext, useState } from "react";
import { DataContext } from "../../DataContext";
import Button from "../Button/Button";
import "../Outline/Outline.css";
import Response from "../Response/Response";
import Text from "../Text/Text";

function Outline() {
  const { finalreview } = useContext(DataContext);
  return (
    <>
      <div className={`${finalreview ? "active" : ""}`}>
        <Text />
        <Button />
      </div>
      <div className={`${finalreview ? "response" : "active"}`}>
        <Response finalreview={finalreview} />
      </div>
    </>
  );
}

export default Outline;
