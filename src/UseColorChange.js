import { useState } from 'react';

function useColorChange() {
  const [color, setColor] = useState("red");
  const handleButtonClick = () => {
    setColor("blue");
  };
  return [color, handleButtonClick];
}
export default useColorChange;