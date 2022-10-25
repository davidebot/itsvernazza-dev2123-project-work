
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RouteEnum from "../../../constants/RouteEnum";
import { ContattoModel } from "../../../models/contatto/ContattoModel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { modificaContatto } from "../../../store/rubrica/actions";
import { elencoContatti } from "../../../store/rubrica/selectors";

function ElencoContatti() {
    const dispatch = useAppDispatch();
    const contatti: ContattoModel[] = useAppSelector(elencoContatti);
    const navigate = useNavigate();
    const onClickInserimentoContatto = () => {
        navigate(RouteEnum.InserimentoContatto);
    };

    const onClickModificaContatto = (contattoDaTrovare: ContattoModel) => {


        const contattoModificato: ContattoModel = {
            idContatto: contattoDaTrovare.idContatto,
            denominazione: contattoDaTrovare.denominazione,
            iban: contattoDaTrovare.iban
        };
        dispatch(modificaContatto(contattoModificato));
    };

    return (
        <>

            <Container>
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

            </Container>
        </>
    );
}
export default ElencoContatti;


