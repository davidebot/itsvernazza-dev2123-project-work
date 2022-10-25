import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

interface IProps {
    controlId: string,
    label: string;
    placeholder: string,
    type: string;
    value: string;
    setValue: (val: string) => void;
}

function CampoInput(props: IProps) {
    const { controlId, label, placeholder, type, value, setValue } = props;

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        console.log("value: " + value);
    };

    return (
        <FloatingLabel
            controlId={controlId}
            label={label}
            className="mb-3"
        >
            <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </FloatingLabel>
    );
}

export default CampoInput;
