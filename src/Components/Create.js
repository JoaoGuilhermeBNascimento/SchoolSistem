import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "semantic-ui-react";

const Create = () => {
  const [nome, setNome] = React.useState("");
  const [dataNascimento, setDataNascimento] = React.useState("");
  const [sexo, setSexo] = React.useState("");
  let navigate = useNavigate();

  function handleChange({ target }) {
    setSexo(target.value);
  }

  const postData = () => {
    axios
      .post(`https://61e60120ce3a2d0017358f1c.mockapi.io/SchoolSistem`, {
        nome,
        dataNascimento,
        sexo,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <div>
      <Form className="form">
        <Form.Field>
          <label>Nome Completo</label>
          <Input
            placeholder="Nome Completo"
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Data de Nascimento</label>
          <Input
            type="number"
            placeholder="Birth data"
            onChange={(e) => setDataNascimento(e.target.value)}
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
            />{" "}
            Masculino
          </label>
          <label>
            <input
              type="radio"
              onChange={handleChange}
              name="sexo"
              value="Feminino"
            />{" "}
            Feminino
          </label>
        </Form.Field>
        
        
        <Button onClick={postData} type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Create;
