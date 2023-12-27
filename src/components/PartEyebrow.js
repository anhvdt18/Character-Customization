import React from "react";

function PartEyebrow({ eyebrowParts, getEyebrow }) {
  return (
    <div className="select-box">
      <h4>Eyebrows</h4>
      <ul>
        {eyebrowParts.map((i) => (
          <img
            key={i}
            id={i}
            className="icon"
            src={`/character/eyebrows/${i}.png`}
            alt="body"
            onClick={(e) => {
              getEyebrow(e.target.id);
            }}
          ></img>
        ))}
      </ul>
    </div>
  );
}

export default PartEyebrow;
