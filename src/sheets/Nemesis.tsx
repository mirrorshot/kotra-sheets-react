import {useState} from "react";

function Nemesis() {

    const [nemesis, updateNemesis] = useState('');

    return (
        <div>
            <input type='text'
                   value={nemesis}
                   onChange={(e) => updateNemesis(e.target.value)}
            />
            <p>Nemesis</p>
        </div>
    );
}

export default Nemesis;
