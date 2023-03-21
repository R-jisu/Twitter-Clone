import React, { useState, useEffect, useRef } from "react";

/**
 * use State
 
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
//     id: 1,
//     tab: "Section 1",
//     content: "This is Section 1",
//   },
//   {
//     id: 2,
//     tab: "Section 2",
//     content: "This is Section 2",
//   },
// ];

// const useTabs = (initialTab, allTabs) => {
//   console.log("실행");
//   const [currentIndex, setCurrentIndex] = useState(initialTab);
//   if (!allTabs || !Array.isArray(allTabs)) {
//     return;
//   }
//   return {
//     currentItem: allTabs[currentIndex],
//     changeItem: setCurrentIndex,
//   };
// };
*/

/**
 * use Effect
 *
 * useEffect는 ComponentDidMout, ComponentWillUnMount, ComponentDidUpdate다 만약 의존성배열이 없을 경우.
 * 의존성배열이 매우 중요함
 */

/**
 * useTitle : 문서 제목을 update해줌
 */
// const useTitle = (initialTitle) => {
//   const [title, setTitle] = useState(initialTitle);
//   const updateTitle = () => {
//     const htmlTitle = document.querySelector("title");
//     htmlTitle.innerText = title;
//   };
//   useEffect(updateTitle, [title]);
//   return setTitle;
// };

/**
 * useClick
 *
 * function을 리턴받았다면 그 fucntion은 componentWillUnMount로 부터 호출된것이다.
 *
 * [] 배열 추가하면 componentDidMount때 단 한번만 실행
 */
// const useClick = (onClick) => {
//   const element = useRef();
//   useEffect(() => {
//     if (element.current) {
//       element.current.addEventListener("click", onClick);
//     }
//     console.log(1);
//     return () => {
//       if (element.current) {
//         element.current.removeEventListener("click", onClick);
//       }
//     };
//   }, []);
//   return element;
// };

/**
 * useConfirm
 * 사용자가 뭔가를 하기전에 확인하는 것
 * ex) 삭제할 때 정말 삭제하겠습니까? 이런 것
 *
 * 훅은 아닌데 유용함
 */
// const useConfirm = (message = "", onConfirm, onCancel) => {
//   if (!onConfirm || typeof onConfirm !== "function") return;
//   if (!onCancel || typeof onCancel !== "function") return;
//   const confirmAction = () => {
//     if (window.confirm(message)) {
//       onConfirm();
//     } else onCancel();
//   };
//   return confirmAction;
// };

/**
 * usePreventLeave
 */
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    console.log(11);
    event.returnValue = ""; //크롬에서 이거 안넣으면 동작안함
  };
  const enablePrevent = () => {
    console.log(1);
    window.addEventListener("beforeunload", listener);
    //beforeunloa는 window가 닫히기 전에 function이 실행되는 걸 허락한다.
  };
  const disablePrevent = () => {
    console.log(2);
    window.removeEventListener("beforeunload", listener);
  };
  return { enablePrevent, disablePrevent };
};

function App() {
  /**
   * useEffect Basic
   */
  // const [number, setNumber] = useState(0);
  // const [aNumber, setANumber] = useState(0);
  // const sayHello = () => console.log("Hello");
  // useEffect(() => {
  //   sayHello();
  // }, [number]);

  /**
   * useTitle
   */
  // const titleUpdater = useTitle("Loading...");
  // setTimeout(() => titleUpdater("Main"), 5000);

  /**
   * useClick
   */
  // const input = useRef(); //reference는 기본적으로 우리의 component의 어떤 부분을 선택할 수 있는 방법이다. like document.getelementbyID()
  // setTimeout(() => {
  //   input.current.focus();
  //   console.log(1);
  // }, 3000);

  // const sayHello = () => {
  //   console.log("hello");
  // };
  // const title = useClick(sayHello);

  /**
   * useConfirm
   * 사용자가 뭔가를 하기전에 확인하는 것
   * ex) 삭제할 때 정말 삭제하겠습니까? 이런 것
   */
  // const deleteWorld = () => console.log("Deleting the world");
  // const abort = () => console.log("Aborted");
  // const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

  /**
   * usePreventLeave
   * 사용자가 창을 닫는 것을 막음
   */
  const { enablePrevent, disablePrevent } = usePreventLeave();

  /**
   * use State
   *
   * */
  // const [item, setItem] = useState(0);
  // const incrementItem = () => setItem(item + 1);
  // const decrementItem = () => setItem(item - 1);
  // const resetItem = () => setItem(0);
  // const maxLen = (value) => value.length < 11;
  // const name = useInput("Hi ", maxLen);
  // console.log("name: ", { ...name });
  // let a = useTabs(0, content);
  // console.log("yo", a.changeItem);
  // const { currentItem, changeItem } = useTabs(0, content);

  return (
    <>
      {/*usePreventLeave*/}
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>

      {/*useConfirm*/}
      {/* <button onClick={confirmDelete}>Delete the world</button> */}

      {/*usetitle*/}
      {/* <h1 ref={title}>Hi</h1> */}

      {/*useclick*/}
      {/* <input placeholder="la" ref={input} /> */}
      {/*리액트에 있는 모든 component는 reference element를 가지고 있다 이제 inptut 요소는 const input과 같아짐*/}
    </>

    /*useState*/
    // <>
    //   {/* <div>state value : {item}</div>
    //   <button onClick={incrementItem}>Increment</button>
    //   <button onClick={decrementItem}>Decrement</button>
    //   <button onClick={resetItem}>reset</button> */}
    //   {/*
    //   <h2>Here is Input</h2>
    //   <input type="text" placeholder="name" {...name} />
    //   <input type="text" placeholder="name" value={name.value} onChange={name.onChange} /> */}

    //   {/* {content.map((section, index) => (
    //     <button key={section.id} onClick={() => changeItem(index)}>
    //       {section.tab}
    //     </button>
    //   ))}
    //   <div>{currentItem.content}</div> */}
    // </>

    /** use Effect basic 
     * 
     * 
    <>
      <h2>Hi</h2>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>

      <button
        onClick={() => {
          setANumber(aNumber + 1);
        }}
      >
        {aNumber}
      </button>
    </>
    */
  );
}

export default App;
