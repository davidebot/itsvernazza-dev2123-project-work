import { Tab, Tabs } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Convenzioni from "./Convenzioni";
import EliminaConto from "./EliminaConto";

const GestionePage = () => {
    return (
        <Card className="w-75 mx-auto my-5" bg="light">
            <Tabs
                defaultActiveKey="costi"
                id="fill-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="costi" title="COSTI">
                    <Convenzioni />
                </Tab>
                <Tab eventKey="eliminaConto" title="ELIMINA CONTO">
                    <EliminaConto />
                </Tab>
            </Tabs>
        </Card>
    );
};
export default GestionePage;
