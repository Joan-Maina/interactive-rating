import React from "react";
import "../Response/Response.css";

function Response({ finalreview }) {
  return (
    <div className="submitted">
      <p className="selectednumber">You selected {finalreview} out of 5</p>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default Response;
