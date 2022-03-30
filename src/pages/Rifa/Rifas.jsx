import React, { useEffect, useReducer } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { get } from "../../actions/rifas.actions";
import { cartonConstants } from "../../helpers/constants";
import { cartonReducer } from "../../reducers/rifasReducer";

export default function Rifas() {
  const initialState = {
    carton: [],
  };
  const [carton, dispatch] = useReducer(cartonReducer, initialState);

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
    maximumFractionDigits:0
  });

  return (
    <div>
      <Row>
        <h2>Cartones</h2>
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
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
