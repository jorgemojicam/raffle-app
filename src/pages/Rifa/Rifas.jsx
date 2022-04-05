import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AddRifaModal from "../../components/AddRifaModal";
import DeleteModal from "../../components/DeleteModal";
import useRifa from "../../hooks/useRifa";

export default function Rifas() {
  let navigate = useNavigate();
  const { getAll, cartones, setCarton } = useRifa();
  const [actionModal, setActionModal] = useState(false);
  const [modalAddRif, setModalAddRif] = useState(false);

  const opemModal = () => setActionModal(true);
  const closeModal = () => setActionModal(false);

  const openModalAdd = () => setModalAddRif(true);
  const closeModalAdd = () => setModalAddRif(false);

  const verCarton = (ca) => {
    setCarton(ca);
    navigate(`/carton`);
  };

  useEffect(() => {
    getAll();
  }, []);

  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <>
      <Row>
        <h2>Cartones</h2>

        <Col xs="6" sm="4" md="3" className="mt-2">
          <Card>
            <Card.Body>
              <h1>Create Raffle</h1>
              <Button onClick={openModalAdd} variant="primary">
                Add
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {cartones.cartones &&
          cartones.cartones.map((ca, index) => (
            <Col key={index} xs="6" sm="4" md="3" className="mt-2">
              <Card>
                <Card.Body>
                  <Card.Title>{ca.title}</Card.Title>
                  {ca.description} <br />
                  <p>
                    <Badge bg="secondary" className="me-2">
                      {ca.stalls.filter((a) => a.state === 1).length}
                    </Badge>
                    <Badge bg="warning" className="me-2">
                      {ca.stalls.filter((a) => a.state === 2).length}
                    </Badge>
                    <Badge bg="success">
                      {ca.stalls.filter((a) => a.state === 3).length}
                    </Badge>
                  </p>
                  <p>
                    <b>Premio: </b>
                    {dollarUS.format(ca.winprize)} <br />
                    <b>Valor: </b>
                    {dollarUS.format(ca.price)}
                  </p>
                  <div className="d-flex justify-content-center">
                    <Button
                      size="sm"
                      variant="danger"
                      className="me-2"
                      onClick={opemModal}
                    >
                      <i className="bi-trash3"></i>
                    </Button>
                    <Button
                      size="sm"
                      variant="primary"
                      className="me-2"
                      onClick={() => {
                        verCarton(ca);
                      }}
                    >
                      <i className="bi-eye"></i>
                    </Button>

                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => {
                        verCarton(ca);
                      }}
                    >
                      <i className="bi-check-square"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <DeleteModal isOpen={actionModal} close={closeModal} />
      <AddRifaModal isOpen={modalAddRif} close={closeModalAdd} />
    </>
  );
}
