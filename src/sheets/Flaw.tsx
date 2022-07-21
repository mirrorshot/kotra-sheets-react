import Settable from "./Settable";

function Flaw(props: {
    flaw: string,
    updateFlaw: Function
}) {

    return (
        <div>
            <Settable label={'Flaw'} value={props.flaw} setValue={props.updateFlaw}/>
        </div>
    );
}

export default Flaw;