import React from "react";
import { NepalMap } from "np-react-map";
import { useProvinceId } from "../store/Store";
import { useDistrictName } from "../store/Store";
import "./MapSide.css";

function MapSide() {
  let provinceId = useProvinceId();
  let district = useDistrictName();

  let focusProvince = {
    provinceId: provinceId,
    fill: "green",
    animateAndZoom: true,
  };
  let focusDistrict = {
    districtList: [district],
    fill: "red",
  };

  return (
    <div className="map-contianer" style={{ height: "100%" }}>
      <NepalMap focusProvince={focusProvince} focusDistrict={focusDistrict} />
    </div>
  );
}

export default MapSide;
