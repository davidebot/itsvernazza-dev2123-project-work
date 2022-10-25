import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InserimentoBonificoModel from "../../../models/movimento/InserimentoBonificoModel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { inserimentoBonifico } from "../../../store/movimento/actions";
import { elencoMovimenti } from "../../../store/movimento/selectors";
import { currentIban, userDenominazione } from "../../../store/user/selectors";
import CampoInput from "../components/CampoInput";

const FormInserimento = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const movimenti = useAppSelector(elencoMovimenti);
    const ordinanteDenominazione = useAppSelector(userDenominazione);
    const ordinanteIban = useAppSelector(currentIban);

    const formSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        if (ordinanteDenominazione !== undefined && ordinanteIban !== undefined) {
            const nuovoBonifico: InserimentoBonificoModel = {
                beneficiarioDenominazione: denBeneficiario,
                beneficiarioIban: ibanBeneficiario,
                ordinanteDenominazione: ordinanteDenominazione,
                ordinanteIban: ordinanteIban,
                causale: causale,
                importo: parseFloat(importo),
            };
            dispatch(inserimentoBonifico(nuovoBonifico));
            console.log(movimenti);
        }

        // navigate(RouteEnum.InserimentoBonifico);
    };

    const [denBeneficiario, setDenBeneficiario] = useState<string>("");
    const [ibanBeneficiario, setIbanBeneficiario] = useState<string>("");
    const [causale, setCausale] = useState<string>("");
    const [importo, setImporto] = useState<string>("");

    return (
        <Container className="px-5">
            <Row>
                <Col>
                    <Card className="w-50 mx-auto my-5" bg="light">
                        <Card.Body>
                            <Card.Title className="text-center">
                                <div className="clearfix"></div>
                                <h3 className="mb-3">Inserisci Bonifico</h3>

                            </Card.Title>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Form onSubmit={formSubmit}>


                                            <CampoInput controlId="formInserimentoDenominazione" label="Beneficiario" type="text" placeholder="denominazione" value={denBeneficiario} setValue={setDenBeneficiario} />

                                            <CampoInput controlId="formInserimentoIBAN" label="IBAN" type="text" placeholder="IBAN Beneficiario" value={ibanBeneficiario} setValue={setIbanBeneficiario} />

                                            <CampoInput controlId="causale" label="Causale" type="text" placeholder="Causale" value={causale} setValue={setCausale} />

                                            <CampoInput controlId="Importo" label="Importo" type="number" placeholder="Importo" value={importo} setValue={setImporto} />

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

export default FormInserimento;
