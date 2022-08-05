import Settable from "./Settable";
import './Legacy.css';

export type LegacyData = {
    legacy: string,
    setLegacy: (l: string) => void
};

export default function Legacy(props: LegacyData) {
    return (
        <div className={'Legacy'}>
            <Settable
                label={'Legacy'}
                value={props.legacy}
                setValue={props.setLegacy}/>
        </div>
    );
};