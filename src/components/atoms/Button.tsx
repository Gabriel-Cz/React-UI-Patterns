import React from "react"

const Button: React.FC<any> = ({ ...props }) => {
  return (
    <button {...props} />
  );
}

export default Button;