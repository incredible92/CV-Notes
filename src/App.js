import React from "react";

import "./App.scss";

const SearchBox = () => (
  <div className="SearchBox">
    <img src="/images/Vector.png" className="img" />

    <input type="text" placeholder="search" className="input" />
  </div>
);

const TodoList = () => (
  <div className="TodoList">
    <span>Abdullahi Sulyman</span>
    <span>16-sep-2020</span>
  </div>
);

const Wrapper = () => (
  <div className="Wrapper">
    <h1 className="heading">CV Note</h1>
    <SearchBox />
    <TodoList />
  </div>
);

const NoteWrapper = () => (
  <div className="NoteWrapper">
    <input type="text" ClassName="text" placeholder="Title" />

    <textarea ClassName="MyTextarea" placeholder="type your note"></textarea>

    <div ClassName="rectangles">
      <img src="/images/Rectangle 4.png" alt="image" />
      <img src="/images/Rectangle 7.svg" alt="image" />
      <img src="/images/Rectangle 8.png" alt="image" />
      <img src="/images/Rectangle 9.png" alt="image" />
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Wrapper />
      <NoteWrapper />
    </div>
  );
}

export default App;
