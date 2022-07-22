import Settable from "./Settable";
import './Technique.css';

export default function Technique(props: {
    value: string,
    setValue: Function
}) {
    return (
        <div className={'Technique'}>
            <Settable label={'Technique'} value={props.value} setValue={props.setValue}/>
        </div>
    );
};