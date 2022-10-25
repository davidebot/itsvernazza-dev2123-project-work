
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RouteEnum from "../../../constants/RouteEnum";
import { ContattoModel } from "../../../models/contatto/ContattoModel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { eliminaContatto } from "../../../store/rubrica/actions";
import { elencoContatti } from "../../../store/rubrica/selectors";

function ElencoContatti() {
    const dispatch = useAppDispatch();
    const contatti: ContattoModel[] = useAppSelector(elencoContatti);
    const navigate = useNavigate();
    const onClickInserimentoContatto = () => {
        navigate(RouteEnum.InserimentoContatto);
    };

    const onClickModificaContatto = (idContattoDaModificare: number) => {
        navigate("/modifica-contatto/" + idContattoDaModificare);

    };

    const onClickEliminaContatto = (idContattoDaEliminare: number) => {
        dispatch(eliminaContatto(idContattoDaEliminare));
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
                                            <Button variant="primary" type="submit" onClick={() => onClickModificaContatto(contatto.idContatto)}>
                                                Modifica contatto
                                            </Button>
                                            <Button onClick={() => onClickEliminaContatto(contatto.idContatto)} variant="primary" type="submit">
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


