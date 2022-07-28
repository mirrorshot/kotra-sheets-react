import {useState} from "react";
import './Modal.css';

export default function Modal(props: {
    value: string,
    action?: string,
    apply: Function,
    abort: Function,
    type?: { mode: 'textarea', height?: number, width?: number } | { mode: 'text' }
}) {
    const [state, update] = useState(props.value);

    function apply() {
        if (props.apply) props.apply(state);
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
            <div className={'Content'}>
                {
                    props.type && props.type.mode === 'textarea'
                        ? <textarea value={state}
                                    onChange={e => update(e.target.value)}
                                    autoFocus={true}
                                    onFocus={e => e.target.select()}
                                    onKeyDown={action}
                                    rows={props.type.height}
                                    cols={props.type.width}/>
                        : <input type={'text'}
                                 value={state}
                                 onChange={e => update(e.target.value)}
                                 autoFocus={true}
                                 onFocus={e => e.target.select()}
                                 onKeyDown={action}/>
                }
                <p/>
                {props.apply.toString() !== noop.toString()
                    ? <div>
                        <button type={"submit"} className={'confirm'}
                                onClick={apply}>{props.action ? props.action : 'Apply'}</button>
                        <button className={'abort'} onClick={abort}>Cancel</button>
                    </div>
                    : <button onClick={abort}>{props.action ? props.action : 'Done'}</button>}
            </div>
        </div>
    );
};

export function noop(_?: any | undefined) {
}
