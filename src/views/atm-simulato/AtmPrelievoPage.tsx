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
                    <Row className="justify-content-around py-3" lg={6}>
                        <Col>
                            <Button className="btn btn-lg" onClick={onClickDieci}>10</Button>
                        </Col>
                        <Col>
                            <Button className="btn btn-lg" onClick={onClickCento}>100</Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-around py-3" lg={6}>
                        <Col>
                            <Button className="btn btn-lg" onClick={onClickVenti}>20</Button>
                        </Col>
                        <Col>
                            <Button className="btn btn-lg" onClick={onClickDuecento}>200</Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-around py-3" lg={6}>
                        <Col>
                            <Button className="btn btn-lg" onClick={onClickCinquanta}>50</Button>
                        </Col>
                        <Col>
                            <Button className="btn btn-lg" onClick={onClickCinquecento}>500</Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-center" lg={6}>
                        <Col>
                            <input type="number" className="form-control" placeholder="Importo personalizzato" value={importo} onChange={(event) => setImporto(event.target.value)} />
                        </Col>
                    </Row>
                    <Row className="justify-content-end" lg={6}>
                        <Col>
                            <Button disabled={importo === "" || parseInt(importo) === 0} onClick={() => setStatoPagina("2")} className="btn btn-lg">{"->"}</Button>
                        </Col>
                    </Row>
                </>
            }
            {
                statoPagina === "2" &&
                <>
                    <Row className="justify-content-center" lg={6}>
                        <Col>
                            <label>
                                Prelievo: {importo}
                            </label>
                        </Col>
                    </Row>
                    <Row className="justify-content-center" lg={6}>
                        <Col>
                            <Button className="btn btn-lg" onClick={onClickIndietro}>INDIETRO</Button>
                        </Col>
                        <Col>
                            <Button disabled={parseInt(importo) > saldoCorrente} className="btn btn-lg" onClick={onClickConferma}>CONFERMA</Button>
                        </Col>
                    </Row>
                </>
            }
            {
                statoPagina === "3" &&
                <>
                    <Row className="justify-content-center" lg={6}>
                        <Col>
                            <label>OPERAZIONE ESEGUITA CON SUCCESSO</label>
                        </Col>
                    </Row>
                    <Row className="justify-content-end" lg={6}>
                        <Col>
                            <Button onClick={onClickFine} className="btn btn-lg">Effettua una nuova operazione</Button>
                        </Col>
                    </Row>
                </>
            }
        </Container>
    );
};

export default AtmPrelievoPage;
