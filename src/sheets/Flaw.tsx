import Settable from "./Settable";
import './Flaw.css';

function Flaw(props: {
    flaw: string,
    updateFlaw: Function
}) {

    return (
        <div className={'Flaw'}>
            <Settable label={'Flaw'} value={props.flaw} setValue={props.updateFlaw}/>
        </div>
    );
}

export default Flaw;