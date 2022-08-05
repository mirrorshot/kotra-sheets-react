import React, {useState} from "react";
import Converter from "../../Converter";
import Modal, {noop} from "./Modal";

export default function SaveLoad(props: {
    data: any,
    load: Function
}) {

    const [state, update] = useState({content: '', visible: false, action: noop, actionLabel: 'Done'});

    function save() {
        update({content: Converter.compress(props.data), visible: true, action: noop, actionLabel: 'Done'});
    }

    function toJson() {
        update({content: Converter.toJson(props.data), visible: true, action: noop, actionLabel: 'Done'});
    }

    function load() {
        update({
            content: '',
            action: (v: string) => props.load(Converter.extract(v)),
            visible: true,
            actionLabel: 'Load'
        });
    }

    function fromJson() {
        update({
            content: '',
            action: (v: string) => props.load(Converter.fromJson(v)),
            visible: true,
            actionLabel: 'Load'
        });
    }

    function abort(): void {
        update({...state, visible: false});
    }

    return (
        <div>
            {state.visible
                ? <Modal label={'State'}
                         type={{mode: 'textarea', height: 25, width: 50}}
                         value={state.content}
                         action={state.actionLabel}
                         apply={state.action}
                         abort={abort}/>
                : <div>
                    <button onClick={save}>Save</button>
                    <button onClick={toJson}>To JSON</button>
                    <button onClick={load}>Load</button>
                    <button onClick={fromJson}>From JSON</button>
                </div>
            }
        </div>
    );
};
