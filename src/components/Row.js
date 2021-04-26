import React from "react";
import Cells from "./Cells";

const Row = props => {
  let style = {
    display: "flex"
  };
  let cells = [];
  for (let i = 0; i < 7; i++) {
    cells.push(
      <Cells
        key={i}
        cell={props.cells[i]}
        row={props.row}
        col={i}
        onClickHandler={props.onClickHandler}
      />
    );
  }
  return <div id="cells" style={style}> {cells} </div>;
};

export default Row;