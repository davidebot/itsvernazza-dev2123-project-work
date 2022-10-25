import Table from "react-bootstrap/Table";
import ConvenzioneModel from "../../models/convenzione/ConvenzioneModel";
import { getConvenzione } from "../../store/convenzione/selectors";
import { useAppSelector } from "../../store/hooks";

const Convenzioni = () => {

    const convenzioni: ConvenzioneModel = useAppSelector(getConvenzione);

    const costi = Object.entries(convenzioni);

    return (
        <Table striped bordered hover>
            <tbody>
                {costi.map(ele => (
                    <tr>
                        <td>{ele[0]}</td>
                        <td>{ele[1]}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
export default Convenzioni;





