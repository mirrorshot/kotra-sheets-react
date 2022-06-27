import {useState} from "react";

function Limit(props: any) {
    const [limit, updateLimit] = useState({score: 0, overdriveLimit: props.memories.length + 1, overdrive: false})
    const [overdriveStyle, updateOverdrive] = useState({display: "inline-block", borderLeft: "1px solid black", color: "blue"})

    function newLimit(score: number) {
        const ns = limit.score === score ? score - 1 : score;
        const overdrive = ns > 8;
        const overdriveColor = overdrive ? 'red' : 'blue';
        console.log('overdrive: ', overdrive, ' - color: ', overdriveColor);
        updateOverdrive(o => ({...o, color: overdriveColor}));
        return {...limit, score: ns, override: overdrive};
    }

    return (
        <div>
            <div style={{display: "inline-block"}}>
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
            <div style={overdriveStyle}>
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