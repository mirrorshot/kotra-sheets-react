import {useState} from "react";

export default function Score(props: any) {
    const [score, updateScore] = useState(props.score ? props.score : 0);
    const min = props.min ? props.min : 0;
    const max = props.max ? props.max : 10;
    const step = props.step ? props.step : 1;

    function update(s: number) {
        updateScore(s);
        if(props.setValue) props.setValue(s);
    }

    function decrement() {
        if (score > min) {
            update(score - step);
        }
    }

    function increment() {
        if (score < max) {
            update(score + step);
        }
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{score}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};