import './Settable.css';

import {useState} from "react";

export function Modal(props: any) {
    const [state, update] = useState(props.value);

    function apply() {
        props.setValue(state);
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
        <div>
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

export default function Settable(props: any) {
    const [state, update] = useState({visible: false, text: props.label});

    function showInput() {
        update(s => ({...s, visible: true}));
    }

    function setValue(value: String) {
        update({visible: false, text: value});
        if (props.setValue) props.setValue(value);
    }

    function abort() {
        update(s => ({...s, visible: false}));
    }

    return (
        state.visible
            ? <Modal
                value={state.text}
                setValue={setValue}
                abort={abort}/>
            : <p onClick={showInput}>{state.text}</p>
    );
};