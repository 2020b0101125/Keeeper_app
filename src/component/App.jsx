import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "../notes";

function App() {
  const [list, change] = useState([]);
  function add(val) {
    change((prevValue) => {
      return [...prevValue, val];
    });
  }
  return (
    <div>
      <Header />
      <Note onclick={add} />
      {list.map((x) => {
        return <Note title={x.title} content={x.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
