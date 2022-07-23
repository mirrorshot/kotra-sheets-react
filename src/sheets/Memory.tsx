import Settable from "./Settable";
import './Memory.css';

export default function Memory(props: {
    memory?: {
        value: string,
        consumed: boolean
    },
    setMemory: Function
}) {

    return (
        <div className={'Memory'}>
            <Settable label={'Memory'}
                      value={props.memory ? props.memory.value : ''}
                      setValue={(v: string) => props.setMemory({...props.memory, value: v})}/>
            <input type={'checkbox'}
                   disabled={props.memory === undefined}
                   checked={props.memory?.consumed}
                   onClick={() => props.setMemory({
                       ...props.memory,
                       consumed: props.memory ? !props.memory.consumed : false
                   })}/>
        </div>
    );
};