import { useState } from "react";
import useRifa from "../hooks/useRifa";
import { Card, Col, Row } from "react-bootstrap";
import ManagementStalls from "./ManagementStalls";
export default function Carton() {
  const { cartones } = useRifa();

  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };
  const management = (stall) => {
    console.log("aqui fue", stall);
    setModal(true);
  };

  return (
    <>
      <Row>
        {cartones.carton &&
          cartones.carton.stalls.map((car, i) => (
            <Col key={i} xs="3" sm="3" md="2" lg="1" className="mt-1">
              <Card
                text="white"
                bg={car.state === 1 ? "secondary" : "success"}
                onClick={() => management(car)}
              >
                <Card.Body>
                  <span>{car.numstalls}</span>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <ManagementStalls isOpen={modal} close={closeModal} />
    </>
  );
}
