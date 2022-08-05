import React, {useState} from "react";
import Converter from "../../Converter";
import Modal from "./Modal";

export default function SaveLoad(props: {
    data: any,
    load: (v: any) => void
}) {

    const [state, update] = useState({content: '', visible: false, action: asInteraction()});

    function asInteraction(
        label?: string,
        action?: (v: string) => void
    ) {
        return {
            actionLabel: label ?? 'Done',
            action: action
        }
    }

    function save() {
        update({content: Converter.compress(props.data), visible: true, action: asInteraction()});
    }

    function toJson() {
        update({content: Converter.toJson(props.data), visible: true, action: asInteraction()});
    }

    function load() {
        update({
            content: '',
            visible: true,
            action: asInteraction('Load', (v: string) => props.load(Converter.extract(v)))
        });
    }

    function fromJson() {
        update({
            content: '',
            visible: true,
            action: asInteraction('Load', (v: string) => props.load(Converter.fromJson(v)))
        });
    }

    function abort(): void {
        update({...state, visible: false});
    }

    return (
        <div>
            {state.visible
                ? <Modal label={'State'}
                         type={{mode: 'textarea', height: 25, width: 50}} // todo dynamic size
                         value={state.content}
                         action={state.action.actionLabel}
                         apply={state.action.action}
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
