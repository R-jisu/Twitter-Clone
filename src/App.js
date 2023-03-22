import { elementType } from "prop-types";
import React, { useState, useEffect, useRef } from "react";

/**
 * useFullScrenn
 *
 */

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      const { current } = element;
      current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };
  return { element, triggerFull, exitFull };
};

function App() {
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div>
      <img
        ref={element}
        onClick={exitFull}
        src="./jip.jpg"
        alt="집에가고싶다"
      />
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default App;
