import './Settable.css';

import {useState} from "react";
import Modal from "./Modal";


export default function Settable(props: {
    label: string,
    value: string,
    setValue: Function
}) {
    const [visible, update] = useState(false);

    function showInput() {
        update(true);
    }

    function setValue(value: string) {
        props.setValue(value);
        update(false);
    }

    function abort() {
        update(false);
    }

    return (
        <div className={'Settable'} onDoubleClick={showInput}>
            {visible
                ? <Modal value={props.value} apply={setValue} abort={abort}/>
                : <p className={'Settable'}>{props.value}</p>}
            <p>{props.label}</p>
        </div>
    );
};