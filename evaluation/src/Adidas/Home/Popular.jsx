import React from "react";
import "./Popular.css";
function Popular() {
  return (
    <div className="popular-div">
      <div className="pop-center">
        <em>
          <h5>POPULAR RIGHT NOW</h5>
        </em>
      </div>

      <div className="popular-buttons">
        <button>ORIGINALS</button>
        <button>SLIDES</button>
        <button>YEEZY</button>
        <button>BAG</button>
        <button>NMD</button>
      </div>
    </div>
  );
}

export default Popular;
