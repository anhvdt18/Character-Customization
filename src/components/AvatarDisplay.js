import React from "react";

function AvatarDisplay({
  body,
  eyes,
  hair,
  eyebrow,
  glasses,
  mouth,
  clothingL1,
  clothingL2,
  clothingL3,
  doRandom,
}) {
  return (
    <div className="avatar">
      <div>
        <img
          className="avatar-part layer-1"
          src={`/character/body/${body}.png`}
          alt="body"
        ></img>
        <img
          className="avatar-part layer-2"
          src={`/character/eyes/${eyes}.png`}
          alt="eyes"
        ></img>
        <img
          className="avatar-part layer-5"
          src={`/character/hair/${hair}.png`}
          alt="hair"
        ></img>
        <img
          className="avatar-part layer-3"
          src={`/character/eyebrows/${eyebrow}.png`}
          alt="eyebrow"
        ></img>
        <img
          className="avatar-part layer-4"
          src={`/character/accessories/glasses/${glasses}.png`}
          alt="glasses"
        ></img>
        <img
          className="avatar-part layer-2"
          src="/character/noses/1.png"
          alt="noses"
        ></img>
        <img
          className="avatar-part layer-2"
          src={`/character/mouths/${mouth}.png`}
          alt="mounth"
        ></img>
        <img
          className="avatar-part layer-2"
          src={`/character/clothes/layer_1/${clothingL1}.png`}
          alt="clothingL1"
        ></img>
        <img
          className="avatar-part layer-3"
          src={`/character/clothes/layer_2/${clothingL2}.png`}
          alt="clothingL2"
        ></img>
        <img
          className="avatar-part layer-4"
          src={`/character/clothes/layer_3/${clothingL3}.png`}
          alt="clothingL3"
        ></img>
      </div>
      <button
        className="random-btn"
        onClick={() => {
          doRandom();
        }}
      >
        RANDOMIZE!
      </button>
    </div>
  );
}

export default AvatarDisplay;
