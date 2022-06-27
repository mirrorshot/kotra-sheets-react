import {useState} from "react";

function Flaw() {
    const [flaw, updateFlaw] = useState('');

    return (
        <div>
            <input type='text'
                   value={flaw}
                   onChange={(e) => updateFlaw(e.target.value)}
            />
            <p>Flaw</p>
        </div>
    );
}

export default Flaw;