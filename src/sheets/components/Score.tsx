export default function Score(props: {
    score: number,
    step: number,
    min: number,
    max: number,
    setValue: (s: number) => void
}) {

    function update(s: number) {
        props.setValue(s);
    }

    function decrement() {
        if (props.score > props.min) {
            update(props.score - props.step);
        }
    }

    function increment() {
        if (props.score < props.max) {
            update(props.score + props.step);
        }
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{props.score}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};