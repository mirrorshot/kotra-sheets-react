import Settable from "./Settable";
import './Ability.css';

export default function Ability(props: {
    value: string,
    setValue: (a: string) => void
}) {

    return (
        <div className={'Ability'}>
            <Settable label={'Ability'} value={props.value} setValue={props.setValue}/>
        </div>
    )
};