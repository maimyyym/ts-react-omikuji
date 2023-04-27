import React from "react";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
   return (
     <div>
       <button className="button" onClick={onClick}>{children}</button>
     </div>
   );
 }

 export default Button;
