import Settable from "./Settable";
import './Legacy.css';

export default function Legacy(props: {
    legacy: string,
    setLegacy: Function
}) {
    return (
        <div className={'Legacy'}>
            <Settable
                label={'Legacy'}
                value={props.legacy}
                setValue={props.setLegacy}/>
        </div>
    );
};