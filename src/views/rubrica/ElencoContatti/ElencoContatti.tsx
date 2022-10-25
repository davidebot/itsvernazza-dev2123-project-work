
import { useNavigate } from "react-router-dom";
import RouteEnum from "../../../constants/RouteEnum";
import { ContattoModel } from "../../../models/contatto/ContattoModel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { elencoContatti } from "../../../store/rubrica/selectors";

function ElencoContatti() {
    const showForm: boolean = false;
    const dispatch = useAppDispatch();
    const contatti: ContattoModel[] = useAppSelector(elencoContatti);
    const navigate = useNavigate();
    const onClickInserimentoContatto = () => {
        navigate(RouteEnum.InserimentoContatto);
    };

    // const onClickModificaContatto = (contattoDaTrovare: ContattoModel) => {


    //     const contattoModificato: ContattoModel = {
    //         idContatto: contattoDaModificare.idContatto,
    //         denominazione: contattoDaModificare.denominazione,
    //         iban: contattoDaModificare.iban
    //     };
    //     dispatch(modificaContatto(contattoModificato));
    // };

    return (
        <>

            {/* <Container>
                <Row>
                    <Col>

                        <table className="table table-light table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Denominazione</th>
                                    <th scope="col">IBAN</th>
                                    <th scope="col"></th>
                                </tr>

                            </thead>
                            <tbody>
                                {contatti.map(contatto => (
                                    <tr>
                                        <td>{contatto.denominazione}</td>
                                        <td>{contatto.iban}</td>
                                        <td>
                                            <Button variant="primary" type="submit" onClick={() => onClickModificaContatto(contatto)}>
                                                Modifica contatto
                                            </Button>
                                            <Button variant="primary" type="submit">
                                                Elimina contatto
                                            </Button>
                                        </td>

                                    </tr>

                                ))}
                            </tbody>
                        </table>

                        <div className="mt-3">
                            <Button variant="primary" type="submit" onClick={onClickInserimentoContatto} >
                                Inserisci Nuovo Contatto
                            </Button>
                        </div>

                    </Col>
                </Row>

                {showForm && (<Row>
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
                                            <Form onSubmit={() => onClickModificaContatto()}>


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
                </Row>)}
            </Container> */}
        </>
    );
}
export default ElencoContatti;


