import React, { useEffect, useRef, useState } from "react";
import useObserve from "react-intersectionobserver-wrapper";
import { useProvinceActions } from "../store/Store";
import useDeviceWidth from "../hooks/useDeviceWidth";
import DistrictsInfo from "./DistrictsInfo";
import "./ProvinceContainer.css";

function ProvinceContainer({ id }) {
  const [provinceData, setProvinceData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const innerWidth = useDeviceWidth();
  const ref = useRef(null);
  let { updateProvinceId } = useProvinceActions();
  let provinceIdObserver = useObserve(ref);

  let thresHoldValue = 0.5;
  // accounting for the height of the element when it is sticky at the top.(the right side element passes below it so the even fires so root margin is required)
  let rootMarginValue = "0px 0px 0px 0px";
  if (innerWidth <= 850) {
    thresHoldValue = 0.3;
    if (innerWidth <= 650) rootMarginValue = "-250px 0px 0px 0px";
  }

  useEffect(() => {
    let url = `data/p${id}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setProvinceData(res);
      });
  }, []);

  useEffect(() => {
    provinceIdObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateProvinceId(id);
            setIsActive(true);
            return;
          }
          setIsActive(false);
        });
      },
      { threshold: thresHoldValue, rootMargin: rootMarginValue }
    );
  }, [innerWidth]);

  return (
    <div ref={ref} className={`province-wrapper ${isActive ? "active" : ""}`}>
      <h2 className="province-heading">{provinceData?.province}</h2>
      <div className="districts-containers">
        <DistrictsInfo districts={provinceData?.data} />
      </div>
    </div>
  );
}

export default ProvinceContainer;
