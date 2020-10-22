import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import request from "./request";

function App() {
  const [selectedOptions, setSelectedOptions] = useState(request.fetchTrending);
  return (
    <div className="app">
      <Header />
      <Nav setSelectedOptions={setSelectedOptions} />
      <Results selectedOptions={selectedOptions} />
    </div>
  );
}

export default App;
