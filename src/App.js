import React, { useState, useEffect, useRef } from "react";

/**
 * useBeforeLeave
 * 탭을 닫을 때 실행되는 functiion
 */

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};

function App() {
  const begForLife = () => console.log("가지마");
  useBeforeLeave(begForLife);
  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
