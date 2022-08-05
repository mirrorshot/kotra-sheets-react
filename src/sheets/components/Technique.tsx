import Settable from "./Settable";
import './Technique.css';

export interface TechniqueConfig {
    value: string;
    setValue(value: string): void;
}

export default function Technique(props: TechniqueConfig) {
    return (
        <div className={'Technique'}>
            <Settable label={'Technique'} value={props.value} setValue={props.setValue}/>
        </div>
    );
};