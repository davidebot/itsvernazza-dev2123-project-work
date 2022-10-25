import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import RouteEnum from "../constants/RouteEnum";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { userLogout } from "../store/user/actions";
import { isLogged } from "../store/user/selectors";
import logoApp from "./../assets/img/logo.svg";

const Header: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const logout = () => dispatch(userLogout());
    const userIsLogged = useAppSelector(isLogged);

    useEffect(() => {
        if (userIsLogged !== true && location.pathname !== RouteEnum.Login) {
            navigate(RouteEnum.Login);
        }
    }, [userIsLogged, location.pathname]);


    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <img src={logoApp} width="50" height="50" className="mx-3" alt="logo-app" />
                    </Navbar.Brand>
                    <Navbar.Brand>Vernazza HomeBank</Navbar.Brand>
                    <Navbar.Toggle aria-controls="app-navbar-nav" />
                    <Navbar.Collapse id="app-navbar-nav">
                        <Nav className="ms-auto">
                            {userIsLogged && (
                                <>
                                    <Nav.Item>
                                        <Nav.Link onClick={() => navigate(RouteEnum.Movimenti)}>
                                            Movimenti
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link onClick={() => navigate(RouteEnum.AtmSimulato)}>
                                            ATM Simulato
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link onClick={() => navigate(RouteEnum.Gestione)}>
                                            Profilo
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link className="text-danger fw-bolder" onClick={() => logout()}>
                                            Logout
                                        </Nav.Link>
                                    </Nav.Item>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
