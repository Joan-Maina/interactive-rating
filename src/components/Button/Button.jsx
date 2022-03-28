import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
import "../Button/Button.css";

function Button() {
  const { fetchUser, selectednumber } = useContext(DataContext);

  return (
    <>
      <button
        className={`${selectednumber ? "button" : "inactive"}`}
        onClick={(e) => fetchUser(e)}
      >
        SUBMIT
      </button>
    </>
  );
}

export default Button;
