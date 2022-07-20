import {useState} from "react";
import './Limit.css';

export default function Limit(props: any) {
    const [limit, updateLimit] = useState({
        score: props.score ? props.score : 0,
        overdrive: props.overdrive ? props.overdrive : false,
    });

    const [overdriveStyle, updateOverdrive] = useState({
        color: '#000'
    });

    const overdrivePoints = 3 * ((props.memories ? props.memories : []).length + 1);

    function newLimit(score: number) {
        const ns = limit.score === score ? score - 1 : score;
        const overdrive = ns > 8;
        const overdriveColor = overdrive
            ? '#00F'
            : '#000';
        updateOverdrive(o => ({...o, color: overdriveColor}));
        updateLimit({score: ns, overdrive: overdrive});
    }

    return (
        <div>
            <div className={'limit'}>
                <p>Limit</p>
                {[...Array(8)]
                    .map((_, i) => <input key={i} type='checkbox'
                                          checked={limit.score > i}
                                          onChange={() => newLimit(i + 1)}/>)}
            </div>
            <div className={'limit overdrive'} style={overdriveStyle}>
                <p>Overdrive</p>
                {[...Array(overdrivePoints)]
                    .map((_, i) => i + 8)
                    .map(i => <input key={i} type='checkbox'
                                     checked={limit.score > i}
                                     onChange={() => newLimit(i + 1)}/>)}
            </div>
        </div>
    );
};
