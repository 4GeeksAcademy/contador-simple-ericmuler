import React, { useEffect, useState } from "react";

export const ContadorDeSegundos = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  }, []); 

  return (
    <div className="text-bg col-12 m-5"style={{ height: "400px", fontSize: "300px", textAlign: "center" }}>
      {counter}
    </div>
  );
};