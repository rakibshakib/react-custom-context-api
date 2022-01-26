import React from "react";
import Content from "../Content/Content";

function Section({ theme}) {
  return (
    <div>
      <h3>This is section three</h3>
      <br />
      <p>THis is para</p>
      <Content theme={theme} />
    </div>
  );
}

export default Section;
