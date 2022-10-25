import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RouteEnum from "../../constants/RouteEnum";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { userLogin } from "../../store/user/actions";
import { isLogged, loginError } from "../../store/user/selectors";
import logoApp from "./../../assets/img/logo.svg";

const UserLoginPage: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userIsLogged = useAppSelector(isLogged);
    const userLoginError = useAppSelector(loginError);

    const formSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        dispatch(userLogin({ username: username, password: password }));
    };

    useEffect(() => {
        if (userIsLogged) {
            navigate(RouteEnum.Movimenti);
        }
    }, [userIsLogged]);

    useEffect(() => {
        console.log(userLoginError);
    }, [userLoginError]);

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    return (
        <Container className="px-5">
            <Row>
                <Col>
                    <Card className="w-50 mx-auto my-5" bg="light">
                        <Card.Body>
                            <Card.Title className="text-center">

                                <img src={logoApp} width="150" height="50" className="mb-3" alt="logo-app" />
                                <div className="clearfix"></div>
                                <h3 className="mb-3">Effettua l'accesso</h3>

                            </Card.Title>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Form onSubmit={formSubmit}>
                                            <FloatingLabel
                                                controlId="formUserLoginEmail"
                                                label="Username"
                                                className="mb-3"
                                            >
                                                <Form.Control onChange={(event) => setUsername(event.target.value)} value={username} type="email" placeholder="name@example.com" />
                                            </FloatingLabel>

                                            <FloatingLabel
                                                controlId="formUserLoginPassword"
                                                label="Password"
                                                className="mb-3"
                                            >
                                                <Form.Control onChange={(event) => setPassword(event.target.value)} value={password} type="password" placeholder="Password" />
                                            </FloatingLabel>

                                            <Form.Control.Feedback className="d-block" type="invalid">
                                                {userLoginError}
                                            </Form.Control.Feedback>

                                            <Row>
                                                <Col className="text-center mt-3">
                                                    <Button variant="primary" type="submit">
                                                        Accedi
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default UserLoginPage;
