import React from "react";

function PartGlasses({ glassesParts, getGlasses }) {
  return (
    <div className="select-box">
      <h4>Glasses</h4>
      <ul>
        {glassesParts.map((i) => (
          <img
            key={i}
            id={i}
            className="icon"
            src={`/character/accessories/glasses/${i}.png`}
            alt="body"
            onClick={(e) => {
              getGlasses(e.target.id);
            }}
          ></img>
        ))}
      </ul>
    </div>
  );
}

export default PartGlasses;
