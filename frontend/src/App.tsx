import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={""} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
