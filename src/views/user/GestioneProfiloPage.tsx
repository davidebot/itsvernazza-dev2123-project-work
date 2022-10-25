import React, { useRef } from "react";
import { Container, Overlay, Row, Tooltip } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { currentUser } from "../../store/user/selectors";

const GestioneProfiloPage: React.FC = (): JSX.Element => {
    const user = useSelector(currentUser);

    const [show, setShow] = React.useState<boolean>(false);

    const target = useRef<HTMLButtonElement | null>(null);

    const clickOnCopy = () => {
        setShow(true);
        setTimeout(() => { setShow(false); }, 2000);
        navigator.clipboard.writeText(user!.iban);
    };

    return (
        <>
            <Container className="pt-3">
                <Row>
                    <Card style={{ border: "none" }}>
                        <Container className="p-4">
                            <Row>
                                <h1 className="text-center">
                                    {user?.name} {user?.surname}
                                </h1>
                            </Row>
                        </Container>
                        <Container className="pt-2">
                            <Row>
                                <div className="col">
                                    <h4 className="text-center text-uppercase">
                                        informazioni personali
                                    </h4>
                                    <h6>
                                        Nome: <span className="fw-lighter">{user?.name}</span>
                                    </h6>
                                    <h6>
                                        Cognome: <span className="fw-lighter">{user?.surname}</span>
                                    </h6>
                                    <h6>
                                        Iban: <span className="fw-lighter">{user?.iban}

                                            <Button variant="" ref={target} onClick={() => clickOnCopy()}>🗐</Button>
                                            <Overlay target={target.current} show={show} placement="right">
                                                {(props) => (
                                                    <Tooltip  {...props}>
                                                        IBAN Coipiato
                                                    </Tooltip>
                                                )}
                                            </Overlay>
                                        </span>
                                    </h6>
                                </div>
                                <div className="col">
                                    <h4 className="text-center text-uppercase">
                                        contatti
                                    </h4>
                                    <h6>
                                        Email: <span className="fw-lighter">{user?.username}</span>
                                    </h6>
                                </div>
                            </Row>
                        </Container>
                    </Card>
                </Row>
            </Container>
        </>
    );
};

export default GestioneProfiloPage;
