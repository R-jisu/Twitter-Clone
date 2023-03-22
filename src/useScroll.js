import React, { useState, useEffect } from "react";

/**
 * useScroll
 *
 */

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
};

function App() {
  const { y } = useScroll();
  return (
    <div style={{ height: "1000vh" }}>
      <h2 style={{ position: "fixed", color: y > 1000 ? "red" : "blue" }}>
        hi
      </h2>
    </div>
  );
}

export default App;
