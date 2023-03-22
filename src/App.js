import { elementType } from "prop-types";
import React, { useState, useEffect, useRef } from "react";

/**
 * useNotification
 *
 */

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else return;
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

function App() {
  const triggerNofitif = useNotification("I want to Sleep", {
    body: "go to bed",
  });
  return (
    <div>
      <button onClick={triggerNofitif}>request Noti</button>
    </div>
  );
}

export default App;
