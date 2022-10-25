import { Col, Row } from "react-bootstrap";
import { useAppSelector } from "../../store/hooks";
import { userDenominazione } from "../../store/user/selectors";

const DatiUtente: React.FC = (): JSX.Element => {

    const utente = useAppSelector(userDenominazione);

    return (
        <Row className="justify-content-around py-3" lg={6}>
            <Col>
                <label className="py-3">{utente}</label>
            </Col>
            <Col>
                <label className="py-3">500€</label>
            </Col>
        </Row>
    );
};

export default DatiUtente;
