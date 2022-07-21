import {useState} from "react";
import Settable from "./Settable";
import './Wound.css';

function Wound(props: {
    wound: {
        value: string,
        wounded: boolean
    },
    label: string,
    setWound: Function,
    setWounded: Function
}) {

    const [wound, updateWound] = useState({wound: props.wound.value, wounded: props.wound.wounded})

    function setValue(v: string) {
        updateWound(w => ({...w, wound: v}))
        props.setWound(v);
    }

    function setWounded() {
        updateWound(w => ({...w, wounded: !w.wounded}));
        props.setWounded(wound.wounded);
    }

    return (
        <div className={props.label}>
            <Settable value={wound.wound} label={props.label} setValue={setValue}/>
            <input type='checkbox'
                   checked={wound.wounded}
                   onChange={setWounded}
            />
        </div>
    );
}

export default Wound;
