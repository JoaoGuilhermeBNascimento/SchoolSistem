import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import Header from "./Header";

const Nav = () => {
  return (
    <nav className="main-header">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </nav>
  );
};

export default Nav;
