import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RouteEnum from "../../constants/RouteEnum";
import InserimentoMovimentoATMModel from "../../models/movimento/InserimentoMovimentoATMModel";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { inserimentoPrelievo } from "../../store/movimento/actions";
import { saldo } from "../../store/movimento/selectors";
import { currentUser, userDenominazione } from "../../store/user/selectors";
import DatiUtente from "./DatiUtente";

const AtmPrelievoPage: React.FC = (): JSX.Element => {

    const utente = useAppSelector(currentUser);
    const denominazione = useAppSelector(userDenominazione);
    const saldoCorrente = useAppSelector(saldo);

    const dispatch = useAppDispatch();


    const navigate = useNavigate();

    const [statoPagina, setStatoPagina] = useState<"1" | "2" | "3">("1");

    const [importo, setImporto] = useState<string>("0");

    const onClickConferma = () => {
        if (denominazione !== undefined && utente !== undefined && saldoCorrente >= parseInt(importo)) {
            const nuovoPrelievo: InserimentoMovimentoATMModel = {
                importo: parseInt(importo),
                beneficiarioIban: utente?.iban,
                ordinanteIban: utente?.iban,
                ordinanteDenominazione: denominazione,
                beneficiarioDenominazione: denominazione,
            };
            dispatch(inserimentoPrelievo(nuovoPrelievo));
            setStatoPagina("3");
        }
    };

    const onClickIndietro = () => {
        setStatoPagina("1");
    };

    const onClickFine = () => {
        navigate(RouteEnum.AtmSimulato);
    };

    const onClickDieci = () => {
        setImporto("10");
        setStatoPagina("2");
    };
    const onClickCento = () => {
        setImporto("100");
        setStatoPagina("2");
    };
    const onClickVenti = () => {
        setImporto("20");
        setStatoPagina("2");
    };
    const onClickCinquanta = () => {
        setImporto("50");
        setStatoPagina("2");
    };
    const onClickDuecento = () => {
        setImporto("200");
        setStatoPagina("2");
    };
    const onClickCinquecento = () => {
        setImporto("500");
        setStatoPagina("2");
    };

    return (
        <Container fluid>
            <DatiUtente />
            {statoPagina === "1" &&
                <>
                    <Row className="justify-content-around  mt-5 py-3  text-center">

                        <Col sm={6} >
                            <label
                                className="py-3 h4"
                            >
                                Scegliere l'importo da prelevare
                            </label>
                        </Col>

                    </Row>
                    <Row className="justify-content-center py-3" lg={6}>
                        <Col>
                            <Button className="btn btn-secondary btn-lg" onClick={onClickDieci}>€ 10.00</Button>
                        </Col>
                        <Col>
                            <Button className="btn btn-secondary btn-lg" onClick={onClickCento}>€ 100.00</Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-center py-3" lg={6}>
                        <Col>
                            <Button className="btn btn-secondary btn-lg" onClick={onClickVenti}>€ 20.00</Button>
                        </Col>
                        <Col>
                            <Button className="btn btn-secondary btn-lg" onClick={onClickDuecento}>€ 200.00</Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-center py-3" lg={6}>
                        <Col>
                            <Button className="btn btn-secondary btn-lg" onClick={onClickCinquanta}>€ 50.00</Button>
                        </Col>
                        <Col>
                            <Button className="btn btn-secondary btn-lg" onClick={onClickCinquecento}> € 500.00</Button>
                        </Col>
                    </Row>
                    <Container >
                        <Row className="justify-content-center py-3" lg={6}>
                            <Col className="justify-content-center py-3" >
                                <input type="number" className="form-control" placeholder="Importo personalizzato" value={importo} onChange={(event) => setImporto(event.target.value)} />
                            </Col>
                        </Row>
                    </Container>
                    <Row className="justify-content-end py-3" lg={6}>
                        <Col className="justify-content-end py-3">
                            <Button disabled={importo === "" || parseInt(importo) === 0} onClick={() => setStatoPagina("2")} className="btn  btn-primary btn-lg">AVANTI</Button>
                        </Col>
                    </Row>
                </>
            }
            {
                statoPagina === "2" &&
                <>
                    <Row className="justify-content-center py-3" lg={6}>
                        <Col className="py-3">
                            <label className="h4" >
                                Prelievo: € {parseInt(importo).toFixed(2)}
                            </label>
                        </Col>
                    </Row>
                    <Row className="justify-content-center py-3" lg={6}>
                        <Col className="py-3">
                            <Button className="btn btn-secondary btn-lg" onClick={onClickIndietro}>INDIETRO</Button>
                        </Col>
                        <Col className="py-3">
                            <Button disabled={parseInt(importo) > saldoCorrente} className="btn btn-primary btn-lg" onClick={onClickConferma}>CONFERMA</Button>
                        </Col>
                    </Row>
                </>
            }
            {
                statoPagina === "3" &&
                <>
                    <Row className="justify-content-center py-3 " lg={6}>
                        <Col >
                            <label>OPERAZIONE ESEGUITA CON SUCCESSO</label>
                        </Col>
                    </Row>
                    <Row className="justify-content-end py-3" lg={6}>
                        <Col>
                            <Button onClick={onClickFine} className="btn  btn-primary btn-lg">Effettua una nuova operazione</Button>
                        </Col>
                    </Row>
                </>
            }
        </Container >
    );
};

export default AtmPrelievoPage;
