import React from "react";

function PartClothingL3({ clothingL3Parts, getClothingL3 }) {
  return (
    <div className="select-box">
      <h4>Clothing 3</h4>
      <ul>
        {clothingL3Parts.map((i) => (
          <img
            key={i}
            id={i}
            className="icon"
            src={`/character/clothes/layer_3/${i}.png`}
            alt="ClothingL3"
            onClick={(e) => {
              getClothingL3(e.target.id);
            }}
          ></img>
        ))}
      </ul>
    </div>
  );
}

export default PartClothingL3;
