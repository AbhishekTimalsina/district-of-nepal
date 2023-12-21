import React, { useEffect, useRef, useState } from "react";
import useObserve from "react-intersectionobserver-wrapper";
import { useProvinceActions } from "../store/Store";
import DistrictsInfo from "./DistrictsInfo";
import "./ProvinceContainer.css";

function ProvinceContainer({ id }) {
  const [provinceData, setProvinceData] = useState([]);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const ref = useRef(null);
  let { updateProvinceId } = useProvinceActions();
  let provinceIdObserver = useObserve(ref);
  let dataFetchObserver = useObserve(ref);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  let thresHoldValue = 0.5;
  // accounting for the height of the element when it is sticky at the top.(the right side element passes below it so the even fires so root margin is required)
  let rootMarginValue = "0px 0px 0px 0px";
  if (innerWidth <= 650) {
    thresHoldValue = 0.3;
    rootMarginValue = "-250px 0px 0px 0px";
  }

  useEffect(() => {
    dataFetchObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // let url = new URL(`data/p${id}.json`, location.href);
            let url = `data/p${id}.json`;
            fetch(url)
              .then((res) => res.json())
              .then((res) => {
                setProvinceData(res);
                observer.unobserve(entry.target);
              });
          }
        });
      },
      { threshold: 0, rootMargin: "100%" }
    );
  }, []);

  useEffect(() => {
    provinceIdObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateProvinceId(id);
          }
        });
      },
      { threshold: thresHoldValue, rootMargin: rootMarginValue }
    );
  }, [innerWidth]);

  return (
    <div ref={ref} className="province-wrapper">
      <h2 className="province-heading">{provinceData?.province}</h2>
      <div className="districts-containers">
        <DistrictsInfo districts={provinceData?.data} />
      </div>
    </div>
  );
}

export default ProvinceContainer;
