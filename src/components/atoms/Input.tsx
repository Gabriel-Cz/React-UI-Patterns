import React from "react"

const Input: React.FC<any> = ({ ...props }) => {
  return (
    <input {...props} />
  );
}

export default Input;