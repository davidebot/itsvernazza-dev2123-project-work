import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import RouteEnum from "../constants/RouteEnum";
import { useAppSelector } from "../store/hooks";
import { elencoMovimenti } from "../store/movimento/selectors";

function ListaMovimenti() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const elenco = useAppSelector(elencoMovimenti);
    console.log(elenco);

    const toFormInserimentoBonifico = () => {
        navigate(RouteEnum.InserimentoBonifico);
    };
    return (
        <>
            <Button variant="primary" type="submit" onClick={toFormInserimentoBonifico}>
                inserisci nuovo
            </Button>

            {elenco.map(movimento => movimento.beneficiarioDenominazione
            )}
        </>
    );
}

export default ListaMovimenti;
