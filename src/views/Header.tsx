import classNames from "classnames";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import RouteEnum from "../constants/RouteEnum";
import { useAppSelector } from "../store/hooks";
import { isLogged } from "../store/user/selectors";
import logoApp from "./../assets/img/logo.svg";

const Header: React.FC = (): JSX.Element => {
    const userIsLogged = useAppSelector(isLogged);

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
                            {userIsLogged ? (
                                <>
                                    <Nav.Item>
                                        <NavLink
                                            to={RouteEnum.Movimenti}
                                            className={({ isActive }) => classNames(
                                                "text-decoration-none text-white",
                                                { "active": isActive }
                                            )}
                                        >
                                            <Nav.Link as={Link} to={RouteEnum.Movimenti} >
                                                Movimenti
                                            </Nav.Link>
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <NavLink
                                            to={RouteEnum.AtmSimulato}
                                            className={({ isActive }) => classNames(
                                                "text-decoration-none text-white",
                                                { "active": isActive }
                                            )}
                                        >
                                            <Nav.Link as={Link} to={RouteEnum.AtmSimulato} >
                                                ATM Simulato
                                            </Nav.Link>
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <NavLink
                                            to={RouteEnum.Gestione}
                                            className={({ isActive }) => classNames(
                                                "text-decoration-none text-white",
                                                { "active": isActive }
                                            )}
                                        >
                                            <Nav.Link as={Link} to={RouteEnum.Gestione} >
                                                Profilo
                                            </Nav.Link>
                                        </NavLink>
                                    </Nav.Item>
                                </>
                            ) : (
                                <Nav.Item>
                                    <NavLink
                                        to={RouteEnum.Login}
                                        className={({ isActive }) => classNames(
                                            "text-decoration-none text-white",
                                            { "active": isActive }
                                        )}
                                    >
                                        <Nav.Link as={Link} to={RouteEnum.Login} >
                                            Accedi
                                        </Nav.Link>
                                    </NavLink>
                                </Nav.Item>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
