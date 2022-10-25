import { Tab, Tabs } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Convenzioni from "./Convenzioni";
import Dati from "./Dati";

const GestionePage = () => {
    return (
        <Card className="w-75 mx-auto my-5" bg="light">
            <Tabs
                defaultActiveKey="ilMioCOnto"
                id="fill-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="ilMioCOnto" title="IL MIO CONTO">
                    <Dati />
                </Tab>
                <Tab eventKey="costi" title="COSTI">
                    <Convenzioni />
                </Tab>
                <Tab eventKey="datiPatrimoniali" title="DATI PATRIMONIALI">

                </Tab>
                <Tab eventKey="eliminaConto" title="ELIMINA CONTO">
                </Tab>
            </Tabs>
        </Card>
    );
};
export default GestionePage;
