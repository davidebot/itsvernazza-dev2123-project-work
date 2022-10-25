import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CategoriaMovimentoEnum from "../../../constants/CategoriaMovimentoEnum";
import RouteEnum from "../../../constants/RouteEnum";
import CampoSelect from "../../../models/movimento/CampoSelect";
import { MovimentoModel } from "../../../models/movimento/MovimentoModel";
import { useAppSelector } from "../../../store/hooks";
import { elencoMovimenti, saldo } from "../../../store/movimento/selectors";

function ListaMovimenti() {
    /*  const [saldo,setSaldo]=useState<number>(0);
     setSaldo(useAppSelector(saldo)); */
    const saldoCorrente: number = useAppSelector(saldo);
    const [showSaldo, setShowSaldo] = useState<boolean>(true);
    const navigate = useNavigate();
    const toFormInserimentoBonifico = () => {
        navigate(RouteEnum.InserimentoBonifico);
    };

    const movimenti: MovimentoModel[] = useAppSelector(elencoMovimenti);
    const categorie: string[] = Object.keys(CategoriaMovimentoEnum);

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

    const [categoriaRicerca, setCategoriaRicerca] = useState<string>("");

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoriaRicerca(event.target.value);
    };

    const onClickMostraNascondiSaldo = () => {
        setShowSaldo(!showSaldo);
    };

    return (
        <>

            <Container>
                <Row>
                    <Col>
                        <div className="mt-3">
                            SALDO: {showSaldo ? `${saldoCorrente.toFixed(2)}€` : '*****'}
                        </ div>
                        <div>
                            <Button variant="primary" type="button" onClick={onClickMostraNascondiSaldo} >
                                Mostra/Nascondi
                            </Button>
                        </ div></Col>





                </Row>
                <Row>
                    <Col>

                        <CampoSelect label="Cerca per categoria: " opzioni={categorie} selected={categoriaRicerca} onChangeSelect={onChangeSelect} />

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
                                {movimenti.filter(movimento =>
                                    categoriaRicerca === "" || movimento.categoria === categoriaRicerca
                                ).map((movimento, index) => (
                                    <tr key={(index)}>
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


// toDoList.filter(toDo => ((categoriaRicerca === "" || toDo.categoria.toLowerCase().includes(categoriaRicerca.toLowerCase())) && (toDo.eseguita === eseguitaRicerca)).map((toDo, toDoIndex) => {
//     return (
//         <li key={toDoIndex}>
//             Descrizione: {toDo.descrizione} Categoria: {toDo.categoria} Eseguita: {toDo.eseguita.toString()}<Pulsante id={toDo.id.toString()} testo="Vai al dettaglio" onClickHandler={onClickSuDettaglio} />
//         </li>
//     )

// })
// }
