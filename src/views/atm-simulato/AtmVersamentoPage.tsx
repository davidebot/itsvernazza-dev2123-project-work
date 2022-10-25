import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RouteEnum from "../../constants/RouteEnum";
import DatiUtente from "./DatiUtente";

const AtmVersamentoPage: React.FC = (): JSX.Element => {

    const navigate = useNavigate();

    const [statoPagina, setStatoPagina] = useState<"1" | "2" | "3">("1");

    const [importo, setImporto] = useState<string>("");

    const onClickConfermaVersamento = () => {
        setStatoPagina("3");
    };

    const onClickFine = () => {
        navigate(RouteEnum.AtmSimulato);
    };

    return (
        <Container fluid>

            <DatiUtente />

            {statoPagina === "1" &&
                <>


                    <Row className="justify-content-around  py-3 text-center " >
                        <Col sm={6}>
                            <label
                                className="py-3"
                            >
                                Inserire importo da versare
                            </label>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col sm={3}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">€</span>
                                </div>
                                <input type="text" className="form-control" value={importo} onChange={(event) => setImporto(event.target.value)} />
                                <div className="input-group-append">
                                    <span className="input-group-text">.00</span>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-around  pt-5 pb-3  text-center"  >
                        <Col class="col-md-6">
                            <Button type="button" className="btn btn-secondary btn-lg" onClick={() => setStatoPagina("2")}>Versa</Button>
                        </Col>


                    </Row>
                </>
            }
            {
                statoPagina === "2" &&
                <>

                    <Row className="justify-content-center" lg={6}>
                        <Col>
                            <label className="py-3">
                                Versamento: € {importo}
                            </label>
                        </Col>
                    </Row>
                    <Row className="justify-content-center" lg={6}>
                        <Col>
                            <Button className="btn btn-lg" onClick={onClickConfermaVersamento}>CONFERMA</Button>
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






export default AtmVersamentoPage;
