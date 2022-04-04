import { Modal, Alert, Button } from "react-bootstrap";
export default function DeleteModal({ isOpen, close }) {
  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="danger">
          ¿Esta seguro de eliminar los datos ? <br /> <b>Se perdera todo todillo !</b>
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cerrar
        </Button>
        <Button variant="danger">Eliminar</Button>
      </Modal.Footer>
    </Modal>
  );
}
