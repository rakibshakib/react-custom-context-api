import React from "react";

function Child({ theme }) {
  const style =
    theme === "default"
      ? { background: "blue", color: "white", padding: "10px" }
      : { background: "lightgray", color: "blue", padding: "10px" };
  return (
    <div>
      <h2 style={style}>This is child data</h2>
    </div>
  );
}

export default Child;
