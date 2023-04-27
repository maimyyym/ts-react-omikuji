import React from "react";
import Button from "./Button";
import OmikujiText from "./OmikujiText";
import useDrawOmikuji from "../../hooks/useDrawOmikuji";
import "../../styles/style.css";


const OmikujiBox: React.VFC = () => {

  //result（おみくじ結果）、isDrawing（おみくじ状態の真偽値）、drawOmikuji（関数）を呼び出し
  const { result, isDrawing, drawOmikuji } = useDrawOmikuji();

  return (
    <div className="box_container">
      <Button onClick={drawOmikuji} isDrawing={isDrawing}>
        {isDrawing ? "引いています！" : "おみくじを引く"}</Button>
      <OmikujiText result={result} />
    </div>
  );
}

export default OmikujiBox;
