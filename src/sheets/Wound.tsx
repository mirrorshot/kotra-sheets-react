import {useState} from "react";
import Settable from "./Settable";

function Wound(props: any) {

    const [wound, updateWound] = useState({wound: '', wounded: false})

    function setValue(v: string) {
        updateWound(w => ({...w, wound: v}))
    }

    return (
        <div>
            <Settable label={props.label} setValue={setValue}/>
            <p>{props.label}</p>
            <input type='checkbox'
                   checked={wound.wounded}
                   onChange={() => updateWound(w => ({...w, wounded: !w.wounded}))}
            />
        </div>
    );
}

export default Wound;
