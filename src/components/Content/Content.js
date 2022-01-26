import React from "react";
import Child from "../Child/Child";
import ThemeContext from "../../Context/themeContext";

function Content() {
  return (
    <div>
      <p>THis is section component</p>
      <ThemeContext.Consumer>
        {({ theme }) => <Child theme={theme} />}
      </ThemeContext.Consumer>
    </div>
  );
}

export default Content;
