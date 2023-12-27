import React from "react";

function PartHair({ hairParts, getHair }) {
  return (
    <div className="select-box">
      <h4>Hairs</h4>
      <ul>
        {hairParts.map((i) => (
          <img
            key={i}
            id={i}
            className="icon"
            src={`/character/hair/${i}.png`}
            alt="body"
            onClick={(e) => {
              getHair(e.target.id);
            }}
          ></img>
        ))}
      </ul>
    </div>
  );
}

export default PartHair;
