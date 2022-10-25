import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RouteEnum from "../../constants/RouteEnum";
import DatiUtente from "./DatiUtente";

const AtmSceltaOperazionePage: React.FC = (): JSX.Element => {

    const navigate = useNavigate();

    const onClickVersamento = () => {
        navigate(RouteEnum.Versamento);
    };
    const onClickPrelievo = () => {
        navigate(RouteEnum.Prelievo);
    };


    return (
        <>

            <Container >

                <DatiUtente />

                <Row className="justify-content-around py-3" lg={6}>
                    <Col md={6}>
                        <Button type="button" className="btn  btn-secondary btn-lg" onClick={onClickPrelievo}>PRELIEVO</Button>
                    </Col>

                    <Col md={6}>
                        <Button type="button" className="btn btn-secondary btn-lg" onClick={onClickVersamento} >VERSAMENTO</Button>
                    </Col>

                </Row>

            </Container>
        </>
    );
};

export default AtmSceltaOperazionePage;
