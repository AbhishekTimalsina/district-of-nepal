import React from "react";
import ProvinceContainer from "../components/ProvinceContainer";
import MapSide from "../components/MapSide";
import About from "../components/About";

import "./Home.css";

function Home() {
  let proviceContainers = [1, 2, 3, 4, 5, 6, 7].map((id) => {
    return <ProvinceContainer id={id} key={id} />;
  });

  return (
    <main className="main">
      <div className="left-side">
        <MapSide />
      </div>
      <div className="right-side">
        <About />
        <div>{proviceContainers}</div>
      </div>
    </main>
  );
}

export default Home;
