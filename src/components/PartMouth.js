import React from "react";

function PartMouth({ mouthParts, getMouth }) {
  return (
    <div className="select-box">
      <h4>Mounth</h4>
      <ul>
        {mouthParts.map((i) => (
          <img
            key={i}
            id={i}
            className="icon"
            src={`/character/mouths/${i}.png`}
            alt="body"
            onClick={(e) => {
              getMouth(e.target.id);
            }}
          ></img>
        ))}
      </ul>
    </div>
  );
}

export default PartMouth;
