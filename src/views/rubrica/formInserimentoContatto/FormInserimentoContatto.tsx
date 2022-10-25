import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InserimentoContattoModel from "../../../models/contatto/InserimentoContattoModel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { inserimentoContatto } from "../../../store/rubrica/actions";
import { elencoContatti } from "../../../store/rubrica/selectors";
import CampoInput from "../../movimenti/components/CampoInput";


const FormInserimentoContatto = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const contatti = useAppSelector(elencoContatti);

    const formSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();

        const nuovoContatto: InserimentoContattoModel = {
            denominazione: denominazione,
            iban: iban

        };
        dispatch(inserimentoContatto(nuovoContatto));
        console.log(contatti);
    };

    const [denominazione, setDenominazione] = useState<string>("");
    const [iban, setIban] = useState<string>("");

    return (
        <Container className="px-5">
            <Row>
                <Col>
                    <Card className="w-50 mx-auto my-5" bg="light">
                        <Card.Body>
                            <Card.Title className="text-center">
                                <div className="clearfix"></div>
                                <h3 className="mb-3">Inserisci Contatto</h3>

                            </Card.Title>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Form onSubmit={formSubmit}>


                                            <CampoInput controlId="formInserimentoDenominazione" label="Denominazione" type="text" placeholder="denominazione" value={denominazione} setValue={setDenominazione} />

                                            <CampoInput controlId="formInserimentoIBAN" label="IBAN" type="text" placeholder="IBAN" value={iban} setValue={setIban} />

                                            <Row>
                                                <Col className="text-center mt-3">
                                                    <Button variant="primary" type="submit">
                                                        Inserisci
                                                    </Button>
                                                </Col>
                                                <Col className="text-center mt-3">
                                                    <Button variant="secondary" type="submit">
                                                        Annulla
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

export default FormInserimentoContatto;
