import React from "react";
import { NepalMap } from "np-react-map";
import { useProvinceId } from "../store/Store";
import "./MapSide.css";

function MapSide() {
  let provinceId = useProvinceId();

  let focusProvince = {
    provinceId: provinceId,
    fill: "green",
    animateAndZoom: true,
  };

  return (
    <div className="map-contianer" style={{ height: "100%" }}>
      <NepalMap focusProvince={focusProvince} />
    </div>
  );
}

export default MapSide;
