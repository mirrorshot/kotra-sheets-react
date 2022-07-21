import './Settable.css';

import {useState} from "react";

export function Modal(props: {
    value: string,
    apply: Function,
    abort: Function
}) {
    const [state, update] = useState(props.value);

    function apply() {
        props.apply(state);
    }

    function abort() {
        props.abort();
    }

    function action(e: any) {
        switch (e.keyCode) {
            case 13:
                apply();
                break;
            case 27:
                abort();
                break;
        }
    }

    return (
        <div className={'Modal'}>
            <input type='text'
                   value={state}
                   onChange={e => update(e.target.value)}
                   autoFocus={true}
                   onFocus={e => e.target.select()}
                   onKeyDown={action}
            />
            <button className={'confirm'} onClick={apply}>Save</button>
            <button className={'abort'} onClick={abort}>Cancel</button>
        </div>
    );
}

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