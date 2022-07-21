import Settable from "./Settable";
import Score from "./Score";

export default function Affinity(
    props: {
        affinity: {
            value: string,
            score: number
        },
        updateAffinity: Function,
        updateScore: Function
    }
) {

    return (
        <div>
            <Settable label={'Affinity'} value={props.affinity.value} setValue={props.updateAffinity} />
            <Score score={props.affinity.score} min={0} max={10} step={1} setValue={props.updateScore}/>
        </div>
    );
}
