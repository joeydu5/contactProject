import React from "react";
import "./Detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="detail-map"></div>
      <div className="detail-body">
        <div className="detail-text">
          <i class="material-icons person-icon">person</i>
          <span>Leanne Graham</span>
        </div>

        <div className="detail-text-sub">
          <i class="material-icons">phone</i>
          <span>34829034320</span>
        </div>
        <div className="detail-text-sub">
          <i class="material-icons">email</i>
          <span>is this really?</span>
        </div>
        <div className="detail-text-sub">
          <i class="material-icons">website</i>
        </div>
        <div className="detail-text-sub">
          <i class="material-icons">location_on</i>
        </div>
        <div className="detail-text-sub">
          <i class="material-icons">location_city</i>
        </div>
      </div>
    </div>
  );
};

export default Detail;
