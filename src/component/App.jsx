import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Inputs from "./Inputs";
//import notes from "../notes";

function App() {
  const [list, addList] = useState([]);
  function handleClick(val) {
    addList((prevValue) => {
      return [...prevValue, val];
    });
  }
  function handleDelete(id) {
    //alert(id);
    addList((prevVal) => {
      return prevVal.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <Inputs onclicked={handleClick} />
      {list.map((x, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={x.title}
            content={x.value}
            delete={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
