import React, {useState} from "react";
import Converter from "../Converter";
import {Modal} from "./Settable";

export default function SaveLoad(props: {
    data: any,
    load: Function
}) {

    const [state, update] = useState({content: '', visible: false, action: abort});

    function save() {
        update({content: Converter.compress(props.data), visible: true, action: abort});
    }

    function toJson() {
        update({content: Converter.toJson(props.data), visible: true, action: abort});
    }

    function load() {
        update({...state, action: (v: string) => props.load(Converter.extract(v)), visible: true});
    }

    function fromJson() {
        update({...state, action: (v: string) => props.load(Converter.fromJson(v)), visible: true});
    }

    function abort(v?: any): void {
        update({...state, visible: false});
    }

    return (
        <div>
            {state.visible
                ? <Modal value={state.content} apply={state.action} abort={abort}/>
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
