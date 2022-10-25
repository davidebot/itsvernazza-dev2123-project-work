import { Col, Row } from "react-bootstrap";
import { useAppSelector } from "../../store/hooks";
import { saldo } from "../../store/movimento/selectors";
import { userDenominazione } from "../../store/user/selectors";

const DatiUtente: React.FC = (): JSX.Element => {

    const utente = useAppSelector(userDenominazione);
    const saldoCorrente = useAppSelector(saldo);

    return (
        <Row className="justify-content-around py-3" lg={6}>
            <Col>
                <label className="py-3">{utente}</label>
            </Col>
            <Col>
                <label className="py-3">Saldo: {saldoCorrente.toFixed(2)}€</label>
            </Col>
        </Row>
    );
};

export default DatiUtente;
