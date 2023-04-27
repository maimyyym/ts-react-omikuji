import React from "react";
import "../../styles/style.css";

// プロパティの型を定義
type Props = {
  onClick: () => void; // 引数と戻り値がない関数
  isDrawing: boolean;
  children: React.ReactNode;
};

const Button: React.VFC<Props> = ({ onClick, isDrawing, children }) => {
  return (
    <div>
      <button className="button" onClick={onClick} disabled={isDrawing}>
        {children}
      </button>
    </div>
  );
};

export default Button;
