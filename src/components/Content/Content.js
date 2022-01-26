import React from "react";
import Child from "../Child/Child";

function Content({ theme }) {
  return (
    <div>
      <p>THis is section component</p>
      <Child theme={theme} />
    </div>
  );
}

export default Content;
