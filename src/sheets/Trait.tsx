import Settable from "./Settable";

export default function Trait(props: {
    trait: string,
    setValue: Function
}) {

    return <Settable
        label={'Trait'}
        value={props.trait}
        setValue={props.setValue}
    />;
}
