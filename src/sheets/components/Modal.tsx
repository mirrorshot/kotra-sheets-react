import {useState} from "react";
import './Modal.css';

export default function Modal(props: {
    label: string,
    value: string,
    action?: string,
    apply?: (v: string) => void,
    abort: () => void,
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
                                    rows={props.type.height ?? 1}
                                    cols={props.type.width ?? 30}/>
                        : <input type={'text'}
                                 value={state}
                                 placeholder={props.label}
                                 onChange={e => update(e.target.value)}
                                 autoFocus={true}
                                 onFocus={e => e.target.select()}
                                 onKeyDown={action}/>
                }
                <p/>
                {props.apply
                    ? <div>
                        <button className={'confirm'} onClick={apply}>{props.action ?? 'Apply'}</button>
                        <button className={'abort'} onClick={abort}>Cancel</button>
                    </div>
                    : <button onClick={abort}>{props.action ?? 'Done'}</button>}
            </div>
        </div>
    );
};
