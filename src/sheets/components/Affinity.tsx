import Settable from "./Settable";
import Score from "./Score";
import './Affinity.css';

export type AffinityData = {
    value: string,
    score: number
};

export type AffinityParams = {
    affinity: AffinityData,
    updateAffinity: (a: string) => void,
    updateScore:  (s: number) => void
};

export default function Affinity(props: AffinityParams) {

    return (
        <div className={'Affinity'}>
            <Settable label={'Affinity'} value={props.affinity.value} setValue={props.updateAffinity}/>
            <Score score={props.affinity.score} min={0} max={10} step={1} setValue={props.updateScore}/>
        </div>
    );
}
