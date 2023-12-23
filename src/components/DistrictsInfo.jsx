import { useState } from "react";
import { useDistrictActions } from "../store/Store";
import "./DistrictsInfo.css";

function DistrictsInfo({ districts }) {
  let districtNames = districts?.map((district, i) => {
    return <DistrictAccordion district={district} key={i} />;
  });
  return districtNames;
}

function DistrictAccordion({ district }) {
  const [isOpen, setIsOpen] = useState(false);
  const { setDistrictName } = useDistrictActions();

  function handleClick(e) {
    setIsOpen(!isOpen);
    let districtVal = e.target.dataset.district;

    // if isOpen is true in this function then that means we are closing it so unfocus the district. so set the district name to null
    if (isOpen) districtVal = null;
    setDistrictName(districtVal);
  }
  return (
    <div className={`district-accordion ${isOpen ? "open" : "close"}`}>
      <h2
        className="district-name"
        data-district={district.districtName}
        onClick={handleClick}
      >
        {district.districtName}
      </h2>
      <div className="distrcit-description">
        <ul>
          <li>
            Area: <b>{district.position.area} km&#178; </b>
          </li>
          <li>
            Headquarter: <b>{district.headquarter}</b>
          </li>
          <li>
            Fun Fact: <b>{district.funFact}</b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DistrictsInfo;
