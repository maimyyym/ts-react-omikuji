import React from "react";

import { OmikujiResult as OmikujiResultType } from "../../hooks/useDrawOmikuji";

// プロパティの型を定義
type OmikujiResultProps = {
  result: OmikujiResultType | "";
};

const OmikujiText: React.FC<OmikujiResultProps> = ({ result }) => {
  return (
    <div className="omikuji_result">
      <p className="result_text">{result}</p>
    </div>
  );
};

export default OmikujiText;
