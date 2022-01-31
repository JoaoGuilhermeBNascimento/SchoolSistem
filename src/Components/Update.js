import axios from "axios";
import React from "react";
import { Button, Form, Input } from "semantic-ui-react";

import { useNavigate } from "react-router-dom";

const Update = () => {
  const [nome, setNome] = React.useState("");
  const [dataNascimento, setDataNascimento] = React.useState("");
  const [sexo, setSexo] = React.useState("");
  const [valor1, setValor1] = React.useState(0);
  const [valor2, setValor2] = React.useState(0);
  const [valor3, setValor3] = React.useState(0);
  const [valor4, setValor4] = React.useState(0);
  const [resultado, setResultado] = React.useState(10);
  const [id, setID] = React.useState(null);
  let navigate = useNavigate();

  function handleChange({ target }) {
    setSexo(target.value);
  }

  const updateAPIData = () => {
    axios
      .put(`https://61e60120ce3a2d0017358f1c.mockapi.io/SchoolSistem/${id}`, {
        nome,
        dataNascimento,
        sexo,
        valor1,
        valor2,
        valor3,
        valor4,
      })
      .then(() => {
        navigate("/read");
      });
  };

  React.useEffect(() => {
    let atualizacaoStr = localStorage.getItem("Atualização");
    if (atualizacaoStr) {
      let atualizacao = JSON.parse(atualizacaoStr);
      setID(atualizacao.id);
      setNome(atualizacao.nome);
      setDataNascimento(atualizacao.dataNascimento);
      setSexo(atualizacao.sexo);
      setValor1(atualizacao.valor1);
      setValor2(atualizacao.valor2);
      setValor3(atualizacao.valor3);
      setValor4(atualizacao.valor4);
    }
  }, []);

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nome Completo</label>
          <input
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Data de Nascimento</label>
          <input
            placeholder="Data de Nascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Nota 1</label>
          <Input
            placeholder="Nota 1"
            type="number"
            value={valor1}
            onChange={(e) => setValor1(parseInt(e.target.value))}
          />
        </Form.Field>
        <Form.Field>
          <label>Nota 2</label>
          <Input
            placeholder="Nota 2"
            type="number"
            value={valor2}
            onChange={(e) => setValor2(parseInt(e.target.value))}
          />
        </Form.Field>
        <Form.Field>
          <label>Nota 3</label>
          <Input
            placeholder="Nota 3"
            type="number"
            value={valor3}
            onChange={(e) => setValor3(parseInt(e.target.value))}
          />
        </Form.Field>
        <Form.Field>
          <label>Nota 4</label>
          <Input
            placeholder="Nota 4"
            type="number"
            value={valor4}
            onChange={(e) => setValor4(parseInt(e.target.value))}
          />
        </Form.Field>
        <Form.Field>
          <h3>Sexo</h3>
          <label>
            <input
              type="radio"
              onChange={handleChange}
              name="sexo"
              value="Masculino"
              checked={sexo === "Masculino"}
            />{" "}
            Masculino
          </label>
          <label>
            <input
              type="radio"
              onChange={handleChange}
              name="sexo"
              value="Feminino"
              checked={sexo === "Feminino"}
            />{" "}
            Feminino
          </label>
        </Form.Field>
        <Button onClick={updateAPIData} type="submit">
          Atualizar
        </Button>
      </Form>
    </div>
  );
};

export default Update;
