import {useState} from "react";
import './Modal.css';

export default function Modal(props: {
    value: string,
    apply: Function,
    abort: Function,
    type?: 'text' | 'textarea' | undefined
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
            <div className={'Content'}>
                <input type={props.type ? props.type : 'text'}
                       value={state}
                       onChange={e => update(e.target.value)}
                       autoFocus={true}
                       onFocus={e => e.target.select()}
                       onKeyDown={action}
                />
                <p/>
                {props.apply !== props.abort ?
                    <button type={"submit"} className={'confirm'} onClick={apply}>Save</button> : null}
                <button className={'abort'} onClick={abort}>Cancel</button>
            </div>
        </div>
    );
};
