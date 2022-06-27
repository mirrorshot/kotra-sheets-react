import {useState} from "react";

function Trait() {

    const [trait, updateTrait] = useState('');

    return (
        <div>
            <input type='text'
                   value={trait}
                   onChange={(e) => updateTrait(e.target.value)}
            />
        </div>
    );
}

export default Trait;