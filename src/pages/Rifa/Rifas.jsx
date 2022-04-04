import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AddRifaModal from "../../components/AddRifaModal";
import DeleteModal from "../../components/DeleteModal";
import useRifa from "../../hooks/useRifa";

export default function Rifas() {
  let navigate = useNavigate();
  const { getAll, carton, setCarton } = useRifa();
  const [actionModal, setActionModal] = useState(false);
  const [modalAddRif, setModalAddRif] = useState(false);

  const opemModal = () => setActionModal(true);
  const closeModal = () => setActionModal(false);

  const openModalAdd = () => setModalAddRif(true);
  const closeModalAdd = () => setModalAddRif(false);

  const verCarton = (ca) => {    
    setCarton(ca)
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

        {carton.carton &&
          carton.carton.map((ca, index) => (
            <Col key={index} xs="6" sm="4" md="3" className="mt-2">
              <Card>
                <Card.Body>
                  <Card.Title>{ca.title}</Card.Title>
                  <p>{ca.description}</p>
                  <p>
                    <b>Premio: </b>
                    {dollarUS.format(ca.winprize)}
                  </p>
                  <p>
                    <b>Valor: </b>
                    {dollarUS.format(ca.price)}
                  </p>

                  <Button size="sm" variant="danger" onClick={opemModal}>
                    x
                  </Button>

                  <Button
                    size="sm"
                    variant="success"
                    onClick={() =>{ verCarton(ca)}}
                  >
                    ver
                  </Button>
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
