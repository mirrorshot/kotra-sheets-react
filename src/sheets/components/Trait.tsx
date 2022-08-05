import Settable from "./Settable";
import './Trait.css';

export default function Trait(props: {
    trait: string;
    setValue: (value: string) => void;
    isAvailable?: () => boolean;
}) {

    return (
        <div className={'Trait'}>
            <Settable
                label={'Trait'}
                value={props.trait}
                setValue={props.setValue}
                disabled={props.isAvailable ? !props.isAvailable() : false}
            />
        </div>
    );
}
