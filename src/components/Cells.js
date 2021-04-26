import React from "react";
import Circle from "./Circle";

const Cells = ({ row, col, cell, onClickHandler }) => {
  return (
    <div id="onclickcell" className="squareGrid" onClick={() => onClickHandler(row, col)}>
      <Circle cell={cell} />
    </div>
  );
};

export default Cells;
