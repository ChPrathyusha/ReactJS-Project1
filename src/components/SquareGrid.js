import React from "react";
import Row from "./Row";

const SquareGrid = props => {
  console.log(props);
  let rows = [];
  for (let i = 5; i >= 0; i--) {
    rows.push(
      <Row
        key={i}
        row={i}
        cells={props.cells[i]}
        onClickHandler={props.onClickHandler}
      />
    );
  }
  return <div id="GridRows">{rows}</div>;
};

export default SquareGrid;