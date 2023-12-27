import React from "react";

function PartEyes({ eyesParts, getEyes }) {
  return (
    <div className="select-box">
      <h4>Eyes</h4>
      <ul>
        {eyesParts.map((i) => (
          <img
            key={i}
            id={i}
            className="icon"
            src={`/character/eyes/${i}.png`}
            alt="body"
            onClick={(e) => {
              getEyes(e.target.id);
            }}
          ></img>
        ))}
      </ul>
    </div>
  );
}

export default PartEyes;
