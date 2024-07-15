import React, { useState, useRef } from "react";

function useUndoRedo(initialState) {
  console.log("🚀 ~ initialState:", initialState);
  const [state, setState] = useState(initialState);
  const historyRef = useRef([initialState]);
  const currentIndexRef = useRef(0);

  const set = (newState) => {
    const newHistory = historyRef.current.slice(0, currentIndexRef.current + 1);
    newHistory.push(newState);
    historyRef.current = newHistory;
    currentIndexRef.current++;
    setState(newState);
  };

  const undo = () => {
    if (currentIndexRef.current > 0) {
      currentIndexRef.current--;
      setState(historyRef.current[currentIndexRef.current]);
    }
  };

  const redo = () => {
    if (currentIndexRef.current < historyRef.current.length - 1) {
      currentIndexRef.current++;
      setState(historyRef.current[currentIndexRef.current]);
    }
  };

  return [state, set, undo, redo, currentIndexRef, historyRef];
}

function Counter() {
  const [count, setCount, undo, redo, currentIndexRef, historyRef] =
    useUndoRedo(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={undo} disabled={currentIndexRef.current === 0}>
        Undo
      </button>
      <button
        onClick={redo}
        disabled={currentIndexRef.current === historyRef.current.length - 1}
      >
        Redo
      </button>
    </div>
  );
}

export default Counter;
