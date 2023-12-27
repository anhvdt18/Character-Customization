import React from "react";

function PartClothingL2({ clothingL2Parts, getClothingL2 }) {
  return (
    <div className="select-box">
      <h4>Clothing 2</h4>
      <ul>
        {clothingL2Parts.map((i) => (
          <img
            key={i}
            id={i}
            className="icon"
            src={`/character/clothes/layer_2/${i}.png`}
            alt="ClothingL2"
            onClick={(e) => {
              getClothingL2(e.target.id);
            }}
          ></img>
        ))}
      </ul>
    </div>
  );
}

export default PartClothingL2;
