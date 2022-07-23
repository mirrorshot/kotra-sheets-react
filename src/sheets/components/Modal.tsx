import {useState} from "react";
import './Modal.css';

export default function Modal(props: {
    value: string,
    action?: string,
    apply: Function,
    abort: Function,
    type?: 'text' | 'textarea' | undefined
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

    console.log('apply: ', props.apply.toString(), ' - noop: ', noop.toString());

    return (
        <div className={'Modal'}>
            <div className={'Content'}>
                <input type={props.type ? props.type : 'text'}
                       value={state}
                       onChange={e => update(e.target.value)}
                       autoFocus={true}
                       onFocus={e => e.target.select()}
                       onKeyDown={action}
                />
                <p/>
                {props.apply.toString() !== noop.toString()
                    ? <div>
                        <button type={"submit"} className={'confirm'} onClick={apply}>{props.action ? props.action: 'Apply'}</button>
                        <button className={'abort'} onClick={abort}>Cancel</button>
                    </div>
                    : <button onClick={abort}>{props.action ? props.action: 'Done'}</button>}
            </div>
        </div>
    );
};

export function noop(_?: any | undefined) {
}
