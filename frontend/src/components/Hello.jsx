import { useState } from "react";

export const Hello = () => {
  const hellos = ["Hello", "Bonjour", "Kamusta"];
  const [currentHelloIndex, setCurrentHelloIndex] = useState(0);

  const nextHello = () => {
    if (currentHelloIndex === hellos.length - 1) {
      setTimeout(() => {
        setCurrentHelloIndex(0);
      }, 300);
    } else {
      setTimeout(() => {
        setCurrentHelloIndex(currentHelloIndex + 1);
      }, 300);
    }
  };

  return (
    <p
      className="transition-all duration-300 cursor-pointer"
      onMouseOver={nextHello}
    >
      {`${hellos[currentHelloIndex]} 👋🏻`}
    </p>
  );
};

export default Hello;
