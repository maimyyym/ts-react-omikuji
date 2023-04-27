import React from "react";
import useDrawOmikuji from "../../hooks/useDrawOmikuji";


const OmikujiText: React.FC = () => {

  const { result } = useDrawOmikuji();

  return (
    <p>{result}</p>
  );
}

export default OmikujiText;
