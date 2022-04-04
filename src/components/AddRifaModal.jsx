import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

import useAuth from "../auth/useAuth";
import useRifa from "../hooks/useRifa";

export default function AddRifaModal({ isOpen, close }) {
  const { authState } = useAuth();
  const { createRifa } = useRifa();

  const [validated, setValidated] = useState(false);
  const [cartons, setCartons] = useState(null);

  const create = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      let stalls = [];
      for (let i = 0; i < 100; i++) {
        const stall = {
          numstall: i,
          state: 1,
        };
        stalls.push(stall);
      }
      const newcarton = {
        ...cartons,
        user: {
          _id: authState.user.id,
        },
        cant: 100,
        stalls,
      };
      createRifa(newcarton);
      close();
    }
    setValidated(true);
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
        <Form noValidate validated={validated} onSubmit={create}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese titulo"
              name="title"
              required
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
              required
              onChange={handdleCarton}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Premio</Form.Label>
            <Form.Control
              type="number"
              placeholder="ingrese el valor del premio"
              name="winprize"
              min={50000}
              required
              onChange={handdleCarton}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              type="number"
              placeholder="ingrese el valor de la rifa"
              name="price"
              required
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
