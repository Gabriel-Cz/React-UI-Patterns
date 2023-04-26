import React, { MouseEventHandler, useState } from "react"

const useHover = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleOnHover: MouseEventHandler = () => {
    setIsHovering(!isHovering);
  }

  const HoverWrapper: React.FC<any> = ({ children }) => React.createElement('div', {
    onMouseEnter: handleOnHover,
    onMouseLeave: handleOnHover,
    children: isHovering && children
  })

  return { isHovering, HoverWrapper };
}

export default useHover;