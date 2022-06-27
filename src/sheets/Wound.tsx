import {useState} from "react";

function Wound(props: any) {

    const [wound, updateWound] = useState({wound: '', wounded: false})

    return <div>
        <input
            type='text'
            value={wound.wound}
            onChange={(e) => updateWound(w => ({...w, wound: e.target.value}))}
        />
        <p>{props.label}</p>
        <input type='checkbox'
               checked={wound.wounded}
               onChange={() => updateWound(w => ({...w, wounded: !w.wounded}))}
        />
    </div>;
}

export default Wound;
