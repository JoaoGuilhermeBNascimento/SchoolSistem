import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";

const Read = () => {
  const [APIData, setAPIData] = React.useState([]);
  let navigate = useNavigate();

  const setData = (data) => {
    const atualizacao = JSON.stringify(data);

    localStorage.setItem("Atualização", atualizacao);
  };
  const onDelete = (id) => {
    axios
      .delete(`https://61e60120ce3a2d0017358f1c.mockapi.io/SchoolSistem/${id}`)
      .then(() => {
        getData();
      })
      .then(() => {
        navigate("/read");
      });
  };
  const getData = () => {
    axios
      .get(`https://61e60120ce3a2d0017358f1c.mockapi.io/SchoolSistem`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  React.useEffect(() => {
    axios
      .get(`https://61e60120ce3a2d0017358f1c.mockapi.io/SchoolSistem`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
            <Table.HeaderCell>Sexo</Table.HeaderCell>
            <Table.HeaderCell>Média</Table.HeaderCell>
            <Table.HeaderCell>Atualizar</Table.HeaderCell>
            <Table.HeaderCell>Deletar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.sort(function (a, b) {
            let mediaA = (a.valor1 + a.valor2 + a.valor3 + a.valor4) / 4;
            let mediaB = (b.valor1 + b.valor2 + b.valor3 + b.valor4) / 4;
            if (mediaB > mediaA) {
              return 1;
            }
            if (mediaA > mediaB) {
              return -1;
            }
            return 0;
          }).map((data) => {
            let media =
              (data.valor1 + data.valor2 + data.valor3 + data.valor4) / 4;

            return (
              <Table.Row
                style={{
                  backgroundColor: media < 6 ? "red" : "green",
                  color: "#ffffff",
                }}
              >
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.nome}</Table.Cell>
                <Table.Cell>{data.dataNascimento}</Table.Cell>
                <Table.Cell>{data.sexo}</Table.Cell>
                <Table.Cell>{media}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button onClick={() => setData(data)} color="green">
                      Atualizar
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to="/delete">
                    <Button onClick={() => onDelete(data.id)} color="red">
                      Deletar
                    </Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;
