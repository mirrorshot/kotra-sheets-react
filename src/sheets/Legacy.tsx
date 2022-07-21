import Settable from "./Settable";

export default function Legacy(props: {
    legacy: string,
    setLegacy: Function
}) {
    return (
        <div>
            <Settable
                label={'Legacy'}
                value={props.legacy}
                setValue={props.setLegacy}/>
        </div>
    );
};