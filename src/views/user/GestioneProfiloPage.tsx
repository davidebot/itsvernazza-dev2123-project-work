import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { currentUser } from "../../store/user/selectors";

const GestioneProfiloPage: React.FC = (): JSX.Element => {
    const user = useSelector(currentUser);

    return (
        <>
            <Container className="pt-3">
                <Row>
                    <Card style={{ border: "none" }}>
                        <Card.Img
                            src="https://media-exp1.licdn.com/dms/image/C4E03AQEcxnf06oZZCw/profile-displayphoto-shrink_800_800/0/1611840128677?e=2147483647&v=beta&t=92zACAI3UpLnYoVSJt-944PFx9elFRBwB7taPRg5ljM"
                            className="rounded-circle rounded mx-auto d-block p-4"
                            style={{ width: 150 }}
                            alt="Avatar"
                        />
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
                                        Iban: <span className="fw-lighter">{user?.iban}</span>
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
