import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">Home </Link>| 
      <Link to="/create">Cadastro de Aluno</Link>|{" "}
      <Link to="/read">Alunos Cadastrados</Link>|
    </header>
  );
};

export default Header;
