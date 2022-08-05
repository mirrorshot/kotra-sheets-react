import {useState} from "react";
import './Limit.css';

export const overdriveColor = '#00F';
export const commonColor = '#000';

export type LimitData = {
    score: number,
    overdrive: boolean,
};

export default function Limit(props: {
    limit: LimitData,
    memories: Array<string>,
    updateLimit: (l: LimitData) => void,
}) {

    const [overdriveStyle, updateOverdrive] = useState({
        color: overdriveColor
    });

    const overdrivePoints = 3 * (props.memories.length + 1);

    function newLimit(score: number) {
        const ns = props.limit.score === score ? score - 1 : score;
        const overdrive = ns > 8;
        const color = overdrive ? commonColor : overdriveColor;
        updateOverdrive(o => ({...o, color: color}));
        props.updateLimit({score: ns, overdrive: overdrive});
    }

    return (
        <div>
            <div className={'limit'}>
                <p>Limit</p>
                {[...Array(8)]
                    .map((_, i) => <input key={i}
                                          type='checkbox'
                                          checked={props.limit.score > i}
                                          onChange={() => newLimit(i + 1)}/>)}
            </div>
            <div className={'limit overdrive'} style={overdriveStyle}>
                <p>Overdrive</p>
                {[...Array(overdrivePoints)]
                    .map((_, i) => i + 8)
                    .map(i => <input key={i} type='checkbox'
                                     checked={props.limit.score > i}
                                     onChange={() => newLimit(i + 1)}/>)}
            </div>
        </div>
    );
};
