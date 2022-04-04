import React, { useEffect, useReducer, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { get } from "../../actions/rifas.actions";
import AddRifaModal from "../../components/AddRifaModal";
import DeleteModal from "../../components/DeleteModal";
import { cartonConstants } from "../../helpers/constants";
import { cartonReducer } from "../../reducers/rifasReducer";

export default function Rifas() {
  const initialState = {
    carton: [],
  };
  const [carton, dispatch] = useReducer(cartonReducer, initialState);
  const [actionModal, setActionModal] = useState(false);
  const [modalAddRif, setModalAddRif] = useState(false);

  const opemModal = () => setActionModal(true);
  const closeModal = () => setActionModal(false);

  const openModalAdd = () => setModalAddRif(true);
  const closeModalAdd = () => setModalAddRif(false);

  useEffect(() => {
    const initFetch = async () => {
      const res = await get();
      dispatch({
        type: cartonConstants.GET_CARTON_REQUEST,
        payload: { cartons: res.cartons },
      });
    };
    initFetch();
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
                    {dollarUS.format(ca.value)}
                  </p>
                  <p>
                    <b>Valor: </b>
                    {dollarUS.format(ca.price)}
                  </p>
                </Card.Body>
                <Button size="sm" variant="danger" onClick={opemModal}>
                  x
                </Button>
              </Card>
            </Col>
          ))}
      </Row>
      <DeleteModal isOpen={actionModal} close={closeModal} />
      <AddRifaModal isOpen={modalAddRif} close={closeModalAdd} />
    </>
  );
}
