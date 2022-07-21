import Settable from "./Settable";

function Nemesis(props: {
    nemesis: string,
    updateNemesis: Function
}) {
    return (
        <div>
            <Settable label={'Nemesis'} value={props.nemesis} setValue={props.updateNemesis}/>
        </div>
    );
}

export default Nemesis;
