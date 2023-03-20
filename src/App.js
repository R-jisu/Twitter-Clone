import React, { useState } from "react";

// const useInput = (initialValue, validator) => {
//   const [value, setValue] = useState(initialValue);
//   const onChange = (event) => {
//     // const value = event.target.value
//     const {
//       target: { value },
//     } = event;
//     let willUpdate = true;
//     if (typeof validator === "function") {
//       willUpdate = validator(value);
//     }
//     if (willUpdate) {
//       setValue(value);
//     }
//   };
//   return { value, onChange };
// };

// const content = [
//   {
//     tab: "Section 1",
//     content: "This is Section 1",
//   },
//   {
//     tab: "Section 2",
//     content: "This is Section 2",
//   },
// ];

// const useTabs = (initialTab, allTabs) => {
//   const [currentIndex, setCurrentIndex] = useState(initialTab);
//   if (!allTabs || !Array.isArray(allTabs)) {
//     return;
//   }
//   return {
//     currentItem: allTabs[currentIndex],
//     changeItem: setCurrentIndex,
//   };
// };

function App() {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  const resetItem = () => setItem(0);

  // const maxLen = (value) => value.length < 11;
  // const name = useInput("Hi ", maxLen);
  // console.log(name);

  // const { currentItem, changeItem } = useTabs(0, content);
  return (
    <>
      <div>state value : {item}</div>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
      <button onClick={resetItem}>reset</button>

      {/* 
      <h2>Here is Input</h2>
      <input type="text" placeholder="name" {...name} /> */}

      {/* {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div> */}
    </>
  );
}

export default App;
