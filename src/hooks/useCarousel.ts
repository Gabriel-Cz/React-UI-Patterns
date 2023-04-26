import { useState } from "react";

const useCarousel = (length: number) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrevious = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? length - 1 : newIndex);
  };
    
  const handleNext = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= length ? 0 : newIndex);
  };

  return {
    currentIndex,
    handleNext,
    handlePrevious,
  }
}

export default useCarousel;