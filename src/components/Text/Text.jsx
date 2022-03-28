import React from "react";
import { AiFillStar } from "react-icons/ai";
import Number from "../Number/Number";
import "../Text/Text.css";

function Text() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="text">
      <div className="icon">
        <AiFillStar />
      </div>
      <h3>How did we do</h3>
      <p>
        Pleaselet us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="numbers">
        {numbers.map((num) => (
          <Number key={num} number={num} />
        ))}
      </div>
    </div>
  );
}

export default Text;
