import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Demo from "./Layouts/Demo";

function App() {
  return (
    <div className="App">
      <Demo />
      <BrowserRouter>
        <Routes>
          <Route path="" element={""} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
