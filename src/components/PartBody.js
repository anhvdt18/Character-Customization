import React from "react";

function PartBody({ bodyParts, getBody }) {
  return (
    <div className="select-box">
      <h4>Bodies</h4>
      <ul>
        {bodyParts.map((i) => (
          <img
            key={i}
            id={i}
            className="icon"
            src={`/character/body/${i}.png`}
            alt="body"
            onClick={(e) => {
              getBody(e.target.id);
            }}
          ></img>
        ))}
      </ul>
    </div>
  );
}

export default PartBody;
