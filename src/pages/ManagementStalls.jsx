
import { Button, Modal } from "react-bootstrap";

export default function ManagementStalls({ isOpen, close }) {
  return (
    <Modal size="md" show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>crear rifa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          
          <Button variant="success">Apuntar</Button>
    
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
