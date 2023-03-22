import React, { useState, useEffect } from "react";

/**
 * useNetwork
 *  naviagtor가 offline이나 online되는것을 막음
 */
const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") onChange(navigator.onLine);
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

function App() {
  const handleNetworkChange = (online) =>
    console.log(online ? "you are online" : "you are offline");
  const onLine = useNetwork(handleNetworkChange);
  return (
    <>
      <h2>{onLine ? "Online" : "Offline"}</h2>
    </>
  );
}

export default App;
