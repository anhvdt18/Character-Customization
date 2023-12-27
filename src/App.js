import React, { useEffect, useState } from "react";
import "./App.css";
import AvatarDisplay from "./components/AvatarDisplay";
import PartBody from "./components/PartBody";
import PartEyes from "./components/PartEyes";
import PartHair from "./components/PartHair";
import PartMouth from "./components/PartMouth";
import PartEyebrow from "./components/PartEyebrow";
import PartGlasses from "./components/PartGlasses";
import PartClothingL1 from "./components/PartClothingL1";
import PartClothingL2 from "./components/PartClothingL2";
import PartClothingL3 from "./components/PartClothingL3";

function App() {
  const [body, setBody] = useState("0");
  const [eyes, setEyes] = useState("0");
  const [hair, setHair] = useState("0");
  const [mouth, setMouth] = useState("0");
  const [eyebrow, setEyebrow] = useState("0");
  const [glasses, setGlasses] = useState("0");
  const [clothingL1, setClothingL1] = useState("0");
  const [clothingL2, setClothingL2] = useState("0");
  const [clothingL3, setClothingL3] = useState("0");

  const bodyParts = Array.from({ length: 17 }, (_, i) => i + 1);
  const eyesParts = Array.from({ length: 24 }, (_, i) => i + 1);
  const hairParts = Array.from({ length: 73 }, (_, i) => i + 1);
  const mouthParts = Array.from({ length: 24 }, (_, i) => i + 1);
  const eyebrowParts = Array.from({ length: 15 }, (_, i) => i + 1);
  const glassesParts = Array.from({ length: 17 }, (_, i) => i + 1);
  const clothingL1Parts = Array.from({ length: 5 }, (_, i) => i + 1);
  const clothingL2Parts = Array.from({ length: 5 }, (_, i) => i + 1);
  const clothingL3Parts = Array.from({ length: 9 }, (_, i) => i + 1);

  const getBody = (src) => setBody(src);
  const getEyes = (src) => setEyes(src);
  const getHair = (src) => setHair(src);
  const getMouth = (src) => setMouth(src);
  const getEyebrow = (src) => setEyebrow(src);
  const getGlasses = (src) => setGlasses(src);
  const getClothingL1 = (src) => setClothingL1(src);
  const getClothingL2 = (src) => setClothingL2(src);
  const getClothingL3 = (src) => setClothingL3(src);

  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const doRandom = () => {
    setBody(getRandom(1, bodyParts.length));
    setEyes(getRandom(1, eyesParts.length));
    setHair(getRandom(1, hairParts.length));
    setMouth(getRandom(1, mouthParts.length));
    setEyebrow(getRandom(1, eyebrowParts.length));
    setGlasses(getRandom(1, glassesParts.length));
    setClothingL1(getRandom(1, clothingL1Parts.length));
    setClothingL2(getRandom(1, clothingL2Parts.length));
    setClothingL3(getRandom(1, clothingL3Parts.length));
    return;
  };

  useEffect(() => {
    doRandom();
  }, []);

  return (
    <div className="body">
      <header className="header">
        <h1>Character</h1>
        <h2>Customization</h2>
      </header>
      <main className="main">
        <AvatarDisplay
          body={body}
          eyes={eyes}
          hair={hair}
          eyebrow={eyebrow}
          glasses={glasses}
          mouth={mouth}
          clothingL1={clothingL1}
          clothingL2={clothingL2}
          clothingL3={clothingL3}
          doRandom={doRandom}
        />
        <div className="select-board">
          <PartBody bodyParts={bodyParts} getBody={getBody} />
          <PartEyes eyesParts={eyesParts} getEyes={getEyes} />
          <PartHair hairParts={hairParts} getHair={getHair} />
          <PartMouth mouthParts={mouthParts} getMouth={getMouth} />
          <PartEyebrow eyebrowParts={eyebrowParts} getEyebrow={getEyebrow} />
          <PartGlasses glassesParts={glassesParts} getGlasses={getGlasses} />
          <PartClothingL1
            clothingL1Parts={clothingL1Parts}
            getClothingL1={getClothingL1}
          />
          <PartClothingL2
            clothingL2Parts={clothingL2Parts}
            getClothingL2={getClothingL2}
          />
          <PartClothingL3
            clothingL3Parts={clothingL3Parts}
            getClothingL3={getClothingL3}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
