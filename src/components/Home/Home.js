import React from "react";
import Section from "../Section/Section";

function Home({ theme}) {
  return (
    <div>
      <h2>this is a section</h2>
      <Section theme={theme} />
    </div>
  );
}

export default Home;
