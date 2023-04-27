import React from "react";
import Button from "./Button";
import OmikujiText from "./OmikujiText";
import useDrawOmikuji from "../../hooks/useDrawOmikuji";



const OmikujiBox: React.FC = () => {

  const { isDrawing, omikujiResult } = useDrawOmikuji();

  return (
    <div className="box_container">
      <Button onClick={omikujiResult}>おみくじを引く</Button>
      <OmikujiText />
    </div>
  );
}

export default OmikujiBox;
