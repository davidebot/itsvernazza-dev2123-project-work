import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RouteEnum from "../../constants/RouteEnum";
import InserimentoMovimentoATMModel from "../../models/movimento/InserimentoMovimentoATMModel";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { inserimentoVersamento } from "../../store/movimento/actions";
import { currentUser, userDenominazione } from "../../store/user/selectors";
import DatiUtente from "./DatiUtente";

const AtmVersamentoPage: React.FC = (): JSX.Element => {

    const utente = useAppSelector(currentUser);
    const denominazione = useAppSelector(userDenominazione);

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [statoPagina, setStatoPagina] = useState<"1" | "2" | "3">("1");

    const [importo, setImporto] = useState<string>("0");

    const onClickConfermaVersamento = () => {
        if (denominazione !== undefined && utente !== undefined) {
            const nuovoVersamento: InserimentoMovimentoATMModel = {
                importo: parseInt(importo),
                beneficiarioIban: utente?.iban,
                ordinanteIban: utente?.iban,
                ordinanteDenominazione: denominazione,
                beneficiarioDenominazione: denominazione,
            };
            dispatch(inserimentoVersamento(nuovoVersamento));
            setStatoPagina("3");
        }
    };

    const onClickIndietro = () => {
        setStatoPagina("1");
    };

    const onClickFine = () => {
        navigate(RouteEnum.AtmSimulato);
    };

    return (
        <Container fluid >

            <DatiUtente />

            {statoPagina === "1" &&

                <Row className="justify-content-center">
                    <Col className="justify-content-center">


                        <Row className="justify-content-around  mt-5 py-3  text-center">

                            <Col sm={6} >
                                <label
                                    className="py-3 h4"
                                >
                                    Inserire importo da versare
                                </label>
                            </Col>

                        </Row>



                        <Row className="justify-content-center py-3" lg={6}>
                            <Col className="justify-content-center py-3" >
                                <input type="number" className="form-control" placeholder="Importo da versare" value={importo} onChange={(event) => setImporto(event.target.value)} />
                            </Col>
                        </Row>


                        <Row className="justify-content-around  pt-5 pb-3  text-center"  >
                            <Col class="col-md-6">
                                <Button disabled={importo === "" || parseInt(importo) <= 0} type="button" className="btn btn-primary btn-lg" onClick={() => setStatoPagina("2")}>Versa</Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            }
            {
                statoPagina === "2" &&
                <>

                    <Row className="justify-content-center" lg={6}>
                        <Col>
                            <label className="py-3 h4">
                                Versamento: ??? {parseInt(importo).toFixed(2)}
                            </label>
                        </Col>
                    </Row>
                    <Row className="justify-content-center" lg={6}>
                        <Col className="py-3">
                            <Button className="btn btn-secondary btn-lg" onClick={onClickIndietro}>INDIETRO</Button>
                        </Col>
                        <Col className="py-3">
                            <Button className="btn btn-primary btn-lg" onClick={onClickConfermaVersamento}>CONFERMA</Button>
                        </Col>
                    </Row>
                </>
            }
            {
                statoPagina === "3" &&
                <>
                    <Row className="justify-content-center" lg={6}>
                        <Col className="py-3">
                            <label className="py-3 h6">OPERAZIONE ESEGUITA CON SUCCESSO</label>
                        </Col>
                    </Row>
                    <Row className="justify-content-center py-3" lg={6}>
                        <Col className="py-3">
                            <Button onClick={onClickFine} className="btn btn-primary btn-lg">Effettua una nuova operazione</Button>
                        </Col>
                    </Row>
                </>
            }
        </Container>
    );

};






export default AtmVersamentoPage;
