import { useState } from "react";
import "./DistrictsInfo.css";

function DistrictsInfo({ districts }) {
  let districtNames = districts?.map((district, i) => {
    return <DistrictAccordion district={district} key={i} />;
  });
  return districtNames;
}

function DistrictAccordion({ district }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleAccordion(e) {
    setIsOpen(!isOpen);
  }
  return (
    <div className={`district-accordion ${isOpen ? "open" : "close"}`}>
      <h2 className="district-name" onClick={handleAccordion}>
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
