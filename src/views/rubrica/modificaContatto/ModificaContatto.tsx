import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import RouteEnum from "../../../constants/RouteEnum";
import { ContattoModel } from "../../../models/contatto/ContattoModel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { modificaContatto } from "../../../store/rubrica/actions";
import { elencoContatti } from "../../../store/rubrica/selectors";
import CampoInput from "../../movimenti/components/CampoInput";


export default function ModificaContatto() {
    const { id: idDaModificare } = useParams();
    console.log(idDaModificare);
    const contatti = useAppSelector(elencoContatti);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [denominazione, setDenominazione] = useState<string>("");
    const [iban, setIban] = useState<string>("");


    const formSubmitModifica = (e?: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        if (idDaModificare !== undefined) {
            const numIdDaModificare = parseInt(idDaModificare);
            const contattoDaTrovare = contatti.find(contatto => contatto.idContatto === numIdDaModificare);

            if (contattoDaTrovare !== undefined) {

                const contattoModificato: ContattoModel = {
                    idContatto: contattoDaTrovare.idContatto,
                    denominazione: denominazione,
                    iban: iban
                };
                dispatch(modificaContatto(contattoModificato));
                console.log(contatti);
            }
        }
        navigate(RouteEnum.Rubrica);
    };

    return (
        <Container className="px-5">
            <Row>
                <Col>
                    <Card className="w-50 mx-auto my-5" bg="light">
                        <Card.Body>
                            <Card.Title className="text-center">
                                <div className="clearfix"></div>
                                <h3 className="mb-3">Modifica Contatto</h3>

                            </Card.Title>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Form onSubmit={formSubmitModifica}>


                                            <CampoInput controlId="formInserimentoDenominazione" label="Denominazione" type="text" placeholder="denominazione" value={denominazione} setValue={setDenominazione} />

                                            <CampoInput controlId="formInserimentoIBAN" label="IBAN" type="text" placeholder="IBAN" value={iban} setValue={setIban} />

                                            <Row>
                                                <Col className="text-center mt-3">
                                                    <Button variant="primary" type="submit">
                                                        Modifica
                                                    </Button>
                                                </Col>
                                                <Col className="text-center mt-3">
                                                    <Button variant="secondary" type="button">
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
}
