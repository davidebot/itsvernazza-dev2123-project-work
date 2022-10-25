import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CategoriaMovimentoEnum from "../../../constants/CategoriaMovimentoEnum";
import RouteEnum from "../../../constants/RouteEnum";
import { MovimentoModel } from "../../../models/movimento/MovimentoModel";
import { useAppSelector } from "../../../store/hooks";
import { elencoMovimenti } from "../../../store/movimento/selectors";

function ListaMovimenti() {

    const navigate = useNavigate();
    const toFormInserimentoBonifico = () => {
        navigate(RouteEnum.InserimentoBonifico);
    };

    const movimenti: MovimentoModel[] = useAppSelector(elencoMovimenti);

    const getDescrizioneCategoria = (categoria: CategoriaMovimentoEnum) => {
        switch (categoria) {
            case CategoriaMovimentoEnum.Bonifico:
                return "Bonifico";
            case CategoriaMovimentoEnum.Prelievo:
                return "Prelievo";
            case CategoriaMovimentoEnum.Versamento:
                return "Versamento";
        }
    };

    return (
        <>

            <Container>
                <Row>
                    <Col>

                        <table className="table table-light table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Denominazione ordinante</th>
                                    <th scope="col">IBAN ordinante</th>
                                    <th scope="col">Denominazione Beneficiario</th>
                                    <th scope="col">IBAN beneficiario</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Causale</th>
                                    <th scope="col">Importo</th>
                                    <th scope="col">Data</th>

                                </tr>

                            </thead>
                            <tbody>
                                {movimenti.map(movimento => (
                                    <tr>
                                        <td>{movimento.ordinanteDenominazione}</td>
                                        <td>{movimento.ordinanteIban}</td>
                                        <td>{movimento.beneficiarioDenominazione}</td>
                                        <td>{movimento.beneficiarioIban}</td>
                                        <td>{getDescrizioneCategoria(movimento.categoria)}</td>
                                        <td>{movimento.causale}</td>
                                        <td>{movimento.importo.toFixed(2).replace(".", ",")}</td>
                                        <td>{new Date(movimento.data).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="mt-3">
                            <Button variant="primary" type="submit" onClick={toFormInserimentoBonifico} >
                                Inserisci Nuovo Bonifico
                            </Button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ListaMovimenti;
