import {useState} from "react";

export function Modal(props: any) {
    const [state, update] = useState(props.value);

    function returnValue() {
        props.setValue(state);
    }

    function cancel() {
        props.abort();
    }

    return (
        <div>
            <input type='text' value={state} onChange={e => update(e.target.value)}/>
            <button onClick={returnValue}>Save</button>
            <button onClick={cancel}>Cancel</button>
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