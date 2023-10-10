import React, { useState } from "react";
function Inputs(props) {
  const [note, addNote] = useState({
    title: "",
    value: "",
  });
  function handleChange(event) {
    const [ne, naam] = [event.target.value, event.target.name];
    addNote((prevValue) => {
      return {
        ...prevValue,
        [naam]: ne,
      };
    });
  }
  return (
    <div className="input">
      <form>
        <input onChange={handleChange} type="text" name="title"></input>
        <input onChange={handleChange} type="text" name="value"></input>
        <p>
          {note.title} {note.value}
        </p>
        <button
          onClick={() => {
            props.onclicked(note);
          }}
        >
          add
        </button>
      </form>
    </div>
  );
}
export default Inputs;
