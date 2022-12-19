import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
         
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>Web Developer</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Nairobi</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Microsoft</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;