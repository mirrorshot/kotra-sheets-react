import {useState} from "react";

function Affinity() {
    const [affinity, updateAffinity] = useState({character: '', score: 0})

    return (
        <div>
            <input type='text'
                   value={affinity.character}
                   onChange={(e) => updateAffinity(a => ({...a, character: e.target.value}))}
            />
            <input type='number'
                   max='10'
                   min='0'
                   value={affinity.score}
                   onChange={(e) => updateAffinity(a => ({...a, score: parseInt(e.target.value)}))}
            />
            <p>Affinity</p>
        </div>
    );
}

export default Affinity;
