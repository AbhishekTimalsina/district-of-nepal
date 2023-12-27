import React, { useEffect, useRef, useState } from "react";
import useObserve from "react-intersectionobserver-wrapper";
import useDeviceWidth from "../hooks/useDeviceWidth";
import { useProvinceActions } from "../store/Store";
import "./About.css";

function About() {
  let ref = useRef(null);
  let { updateProvinceId } = useProvinceActions();
  let fullMapObserver = useObserve(ref);
  let innerWidth = useDeviceWidth();

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
  }, [innerWidth]);
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
