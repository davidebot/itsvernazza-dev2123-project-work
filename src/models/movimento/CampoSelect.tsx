import { Form } from "react-bootstrap";

interface IProps {
    opzioni: string[];
    label: string;
    selected: string;
    onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
export default function CampoSelect(props: IProps) {
    const { opzioni, label, selected, onChangeSelect } = props;
    return (
        <>
            <label>{label}</label>
            <Form.Select value={selected} onChange={onChangeSelect}>
                <option value="">Seleziona categoria</option>
                {

                    opzioni.map(
                        (opzioni, opzioniIndex) => {
                            return (
                                <option key={opzioniIndex} value={opzioni}>{opzioni}</option>
                            );
                        })
                }
            </Form.Select>
        </>

    );
}

function useState(value: any): [any, any] {
    throw new Error("Function not implemented.");
}
