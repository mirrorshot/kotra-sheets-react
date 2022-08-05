import Settable from "./Settable";
import './Trait.css';

export interface TraitConfig {
    trait: string;
    setValue(value: string): void;
    isAvailable?(): boolean;
}

export default function Trait(props: TraitConfig) {

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
