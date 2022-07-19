import {useState} from "react";
import './Limit.css';

function Limit(props: any) {
    const [limit, updateLimit] = useState({
        score: 0,
        overdriveLimit: (props.memories ? props.memories : []).length + 1,
        overdrive: false
    })
    const [overdriveStyle, updateOverdrive] = useState({
        color: "blue"
    })

    function newLimit(score: number) {
        const ns = limit.score === score ? score - 1 : score;
        const overdrive = ns > 8;
        const overdriveColor = overdrive
            ? '#F00'
            : '#00F';
        console.log('overdrive: ', overdrive, ' - color: ', overdriveColor);
        updateOverdrive(o => ({...o, color: overdriveColor}));
        return {...limit, score: ns, override: overdrive};
    }

    return (
        <div>
            <div className={'limit'}>
                <p>Limit</p>
                <input type='checkbox'
                       checked={limit.score > 0}
                       onChange={() => updateLimit(newLimit(1))}/>
                <input type='checkbox'
                       checked={limit.score > 1}
                       onChange={() => updateLimit(newLimit(2))}/>
                <input type='checkbox'
                       checked={limit.score > 2}
                       onChange={() => updateLimit(newLimit(3))}/>
                <input type='checkbox'
                       checked={limit.score > 3}
                       onChange={() => updateLimit(newLimit(4))}/>
                <input type='checkbox'
                       checked={limit.score > 4}
                       onChange={() => updateLimit(newLimit(5))}/>
                <input type='checkbox'
                       checked={limit.score > 5}
                       onChange={() => updateLimit(newLimit(6))}/>
                <input type='checkbox'
                       checked={limit.score > 6}
                       onChange={() => updateLimit(newLimit(7))}/>
                <input type='checkbox'
                       checked={limit.score > 7}
                       onChange={() => updateLimit(newLimit(8))}/>
            </div>
            <div className={'limit overdrive'} style={overdriveStyle}>
                <p>Overdrive</p>
                <input type='checkbox'
                       checked={limit.score > 8}
                       onChange={() => updateLimit(newLimit(9))}/>
                <input type='checkbox'
                       checked={limit.score > 9}
                       onChange={() => updateLimit(newLimit(10))}/>
                <input type='checkbox'
                       checked={limit.score > 10}
                       onChange={() => updateLimit(newLimit(11))}/>
            </div>
        </div>
    );
}

export default Limit;