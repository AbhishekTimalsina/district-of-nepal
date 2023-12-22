import React, { useEffect, useRef, useState } from "react";
import useObserve from "react-intersectionobserver-wrapper";
import "./About.css";
import { useProvinceActions } from "../store/Store";

function About() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  let ref = useRef(null);
  let { updateProvinceId } = useProvinceActions();
  let fullMapObserver = useObserve(ref);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  let thresHoldValue = 0.4;
  if (innerWidth <= 650) {
    thresHoldValue = 0.9;
  }

  useEffect(() => {
    fullMapObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateProvinceId(0);
          }
        });
      },
      { threshold: thresHoldValue }
    );
  }, []);
  return (
    <div ref={ref} className="about-section">
      <h2>Districts of Nepal</h2>
      <div className="about-desc">
        <h4>A fun fact about each district of Nepal.</h4>
        <p>
          Created by
          <a href="https://github.com/AbhishekTimalsina/district-of-nepal">
            <b>Abhishek Timalsina</b>
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
