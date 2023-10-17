import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <BrowserRouter>
        <Routes>
          <Route path="" element={""} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
