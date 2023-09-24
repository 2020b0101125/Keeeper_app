import React, { useState } from "react";

function Note(props) {
  const [val, setTitle] = useState({
    title: "",
    note: "",
  });

  function adder(event) {
    let [a, n] = [event.target.value, event.target.name];
    setTitle((prevValue) => {
      return {
        ...prevValue,
        [n]: a,
      };
    });
  }

  return (
    <div className="Note">
      <input onChange={adder} type="text" value={val.title} name="title" />
      <input onChange={adder} type="text" value={val.note} name="note" />
      <button
        onClick={() => {
          props.onclick(val);
        }}
      >
        add
      </button>
    </div>
  );
}

export default Note;
