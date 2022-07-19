import {useState} from "react";
import Settable from "./Settable";

function Flaw() {
    const [flaw, updateFlaw] = useState('');

    return (
        <div>
            <Settable label={'Flaw'} setValue={updateFlaw}/>
            <p>Flaw</p>
        </div>
    );
}

export default Flaw;