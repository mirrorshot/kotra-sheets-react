import Settable from "./Settable";

export default function Memory(props: {
    memory: string,
    index: number,
    setMemory: Function
}) {

    function setMemory(memory: string) {
        props.setMemory(props.index, memory);
    }

    return (
      <div>
          <Settable label={'Memory'} value={props.memory} setValue={setMemory} />
      </div>
    );
};