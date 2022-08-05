import Settable from "./Settable";
import './Memory.css';

export function toMemory(m?: { value: string, consumed?: boolean }): MemoryData {
    return {value: m?.value ?? '', consumed: m?.consumed ?? false};
}

export function toExtraMemory(m?: { value: string, consumed?: boolean }): ExtraMemoryData {
    return m
        ? {...m, consumed: m.consumed ?? false}
        : undefined;
}

export type MemoryData = {
    value: string,
    consumed: boolean
};

export type ExtraMemoryData = MemoryData | undefined;

export default function Memory(props: {
    memory: ExtraMemoryData,
    label?: string,
    setMemory: Function
}) {

    return (
        <div className={'Memory'}>
            <Settable label={props.label??'Memory'}
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