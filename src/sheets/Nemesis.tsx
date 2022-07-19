import {useState} from "react";
import Settable from "./Settable";

function Nemesis() {

    const [nemesis, updateNemesis] = useState('');

    return (
        <div>
            <Settable label={'Nemesis'} setValue={updateNemesis}/>
            <p>Nemesis</p>
        </div>
    );
}

export default Nemesis;
