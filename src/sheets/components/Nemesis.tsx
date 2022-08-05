import Settable from "./Settable";
import './Nemesis.css';

function Nemesis(props: {
    nemesis: string,
    updateNemesis: (n: string) => void
}) {
    return (
        <div className={'Nemesis'}>
            <Settable label={'Nemesis'} value={props.nemesis} setValue={props.updateNemesis}/>
        </div>
    );
}

export default Nemesis;
