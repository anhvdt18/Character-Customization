import React from "react";

function PartClothingL1({ clothingL1Parts, getClothingL1 }) {
  return (
    <div className="select-box">
      <h4>Clothing 1</h4>
      <ul>
        {clothingL1Parts.map((i) => (
          <img
            key={i}
            id={i}
            className="icon"
            src={`/character/clothes/layer_1/${i}.png`}
            alt="ClothingL1"
            onClick={(e) => {
              getClothingL1(e.target.id);
            }}
          ></img>
        ))}
      </ul>
    </div>
  );
}

export default PartClothingL1;
