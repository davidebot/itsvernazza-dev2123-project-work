import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RouteEnum from "../../../constants/RouteEnum";
import CampoSelect from "../../../models/movimento/CampoSelect";
import InserimentoBonificoModel from "../../../models/movimento/InserimentoBonificoModel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { inserimentoBonifico } from "../../../store/movimento/actions";
import { elencoMovimenti } from "../../../store/movimento/selectors";
import { elencoContatti } from "../../../store/rubrica/selectors";
import { currentIban, userDenominazione } from "../../../store/user/selectors";
import CampoInput from "../components/CampoInput";

const FormInserimentoMovimento = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const movimenti = useAppSelector(elencoMovimenti);
    const ordinanteDenominazione = useAppSelector(userDenominazione);
    const ordinanteIban = useAppSelector(currentIban);
    const contatti = useAppSelector(elencoContatti);

    const formSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        if (ordinanteDenominazione !== undefined && ordinanteIban !== undefined && causale !== "" && importo !== "") {
            const nuovoBonifico: InserimentoBonificoModel = {
                beneficiarioDenominazione: denBeneficiario,
                beneficiarioIban: ibanBeneficiario,
                ordinanteDenominazione: ordinanteDenominazione,
                ordinanteIban: ordinanteIban,
                causale: causale,
                importo: parseFloat(importo),
            };

            dispatch(inserimentoBonifico(nuovoBonifico));
            navigate(RouteEnum.Movimenti);
        }
        else {
            alert("Compilare tutti i campi!!!");
        }
    };



    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setContattoSelezionato(event.target.value);
        let contattoSel = contatti.find(contatto => contatto.denominazione === event.target.value);
        if (contattoSel) {
            setDenBeneficiario(contattoSel.denominazione);
            setIbanBeneficiario(contattoSel.iban);
        }
    };

    const [denBeneficiario, setDenBeneficiario] = useState<string>("");
    const [ibanBeneficiario, setIbanBeneficiario] = useState<string>("");
    const [causale, setCausale] = useState<string>("");
    const [importo, setImporto] = useState<string>("");
    const [contattoSelezionato, setContattoSelezionato] = useState<string>("");

    const annullaInserimento = () => {
        setDenBeneficiario("");
        setIbanBeneficiario("");
        setCausale("");
        setImporto("");
    };

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
                                            <Row>
                                                <Col className="mb-3">
                                                    <CampoSelect label="Prendi dalla rubrica" opzioni={contatti.map(contatto => contatto.denominazione)} selected={contattoSelezionato} onChangeSelect={onChangeSelect} />
                                                </Col>
                                            </Row>
                                            <CampoInput controlId="formInserimentoDenominazione" label="Beneficiario" type="text" placeholder="denominazione" value={denBeneficiario} setValue={setDenBeneficiario} />

                                            <CampoInput controlId="formInserimentoIBAN" label="IBAN" type="text" placeholder="IBAN Beneficiario" value={ibanBeneficiario} setValue={setIbanBeneficiario} />

                                            <CampoInput controlId="causale" label="Causale" type="text" placeholder="Causale" value={causale} setValue={setCausale} />

                                            <CampoInput controlId="Importo" label="Importo" type="number" placeholder="Importo" value={importo} setValue={setImporto} />

                                            <Row>
                                                <Col className="text-center mt-3">
                                                    <Button variant="primary" type="submit" >
                                                        Inserisci
                                                    </Button>
                                                </Col>
                                                <Col className="text-center mt-3">
                                                    <Button variant="secondary" type="button" onClick={annullaInserimento}>
                                                        Reset
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

export default FormInserimentoMovimento;
