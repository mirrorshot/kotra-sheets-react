import Settable from "./Settable";
import './Trait.css';

export default function Trait(props: {
    trait: string,
    setValue: Function
}) {

    return (
        <div className={'Trait'}>
            <Settable
                label={'Trait'}
                value={props.trait}
                setValue={props.setValue}
            />
        </div>
    );
}
