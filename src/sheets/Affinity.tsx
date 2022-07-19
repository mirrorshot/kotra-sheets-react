import {useState} from "react";
import Settable from "./Settable";
import Score from "./Score";

function Affinity() {
    const [affinity, updateAffinity] = useState({character: '', score: 0})

    function setAffinity(v: string){
        updateAffinity(a => ({...a, character: v}));
    }

    function setScore(s: number) {
        updateAffinity(a => ({...a, score: s}))
    }

    return (
        <div>
            <Settable label={'Affinity'} setValue={setAffinity} />
            <Score score={0} setValue={setScore}/>
            <p>Affinity</p>
        </div>
    );
}

export default Affinity;
