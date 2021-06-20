import React from "react";

const Button = ({ onClick}) => (
  <div className="ButtonDiv">
    <button className="Button" type="submit" onClick={onClick}>
      Load more
    </button>
  </div>
);

export default Button;
