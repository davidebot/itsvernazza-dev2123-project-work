import React from "react";
import { Alert, Button, Container, Modal } from "react-bootstrap";
import { useAppDispatch } from "../../store/hooks";
import { userDelete } from "../../store/user/actions";

const EliminaConto = () => {
    const [show, setShow] = React.useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useAppDispatch();

    function eliminaConto() {
        dispatch(userDelete());
    }


    return (
        <Container >
            <Alert show={true} variant="danger">
                <Alert.Heading>Vuoi eliminare il tuo conto?</Alert.Heading>
                <p>
                    Procedendo acconsenti ad eliminare permanentemente il tuo conto
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button className="w-10" variant="danger" onClick={handleShow}>Elimina Conto</Button>
                </div>
            </Alert>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminare il conto</Modal.Title>
                </Modal.Header>
                <Modal.Body>Vuoi eliminare il conto?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={eliminaConto}>
                        Si,elimina conto
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        No, mantieni conto
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>

    );
};
export default EliminaConto;
