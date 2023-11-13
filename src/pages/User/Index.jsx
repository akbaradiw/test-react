import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import { Container, Card, Col, Row, Button } from "react-bootstrap";

const User = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [reset, setReset] = useState("");

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleGetUser = () => {
    axios
      .get(`https://api.mudoapi.tech/menus?name=${name}&type=${type}`)
      .then((res) => {
        console.log(res);
        setUsers(res.data.data.Data);
      })
      .catch((err) => console.log(err));
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    console.log(name);
    handleGetUser();
  };
  const handleSelect = (e) => {
    setType(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="the-placeholder">
        <input onChange={handleChangeName} placeholder="cari nama" />
        <select onChange={handleSelect}>
          <option value={"main-dish"}>food</option>
          <option value={"beverage"}>beverage</option>
        </select>
        <Button onClick={handleSubmit}> test </Button>
      </div>
      <div className="user-display">
        {users.map((food) => (
          <div>
            <Container>
              <Row>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Text>
                        <p>{food.name}</p>
                        <p>{food.description}</p>
                        <p>{food.price}</p>
                      </Card.Text>
                      <Button>
                        <Link to={`/user/${food.id}`}></Link>
                        Pesan makanan
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default User;
