import { useReducer, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { create } from "../actions/rifas.actions";
import { cartonReducer } from "../reducers/rifasReducer";

export default function AddRifaModal({ isOpen, close }) {
  const [carton, dispatch] = useReducer(cartonReducer, null);
  const [cartons, setCartons] = useState(null);

  const create = (e) => {
    e.preventDefault();
    let stalls = [];
    for (let i = 0; i < 100; i++) {
      const stall = {
        numstall: i,
        state: 1,
      };
      stalls.push(stall);
    }
    console.log(stalls)
  };

  const handdleCarton = (e) => {
    const newCarton = {
      ...cartons,
      [e.target.name]: e.target.value,
    };
    setCartons(newCarton);
  };

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>crear rifa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={create}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese titulo"
              name="title"
              onChange={handdleCarton}
            />
            <Form.Text className="text-muted">
              Ingrese el titulo de su rifa
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descripcion de la rifa</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              placeholder="ingrese descripcion"
              name="description"
              onChange={handdleCarton}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Premio</Form.Label>
            <Form.Control
              type="number"
              placeholder="ingrese el valor del premio"
              name="premio"
              onChange={handdleCarton}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              type="text"
              placeholder="ingrese el valor de la rifa"
              name="value"
              onChange={handdleCarton}
            />
          </Form.Group>

          <Button variant="success" className="me-2" type="submit">
            Crear
          </Button>
          <Button variant="secondary" type="submit">
            Descartar
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
