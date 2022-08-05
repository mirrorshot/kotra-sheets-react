import Settable from "./Settable";
import './Flaw.css';

export type FlawData = {
    flaw: string,
    updateFlaw: (f: string) => void
};

export default function Flaw(props: FlawData) {

    return (
        <div className={'Flaw'}>
            <Settable label={'Flaw'} value={props.flaw} setValue={props.updateFlaw}/>
        </div>
    );
}
