import Settable from "./Settable";

export default function Memory(props: any) {

    function setMemory(memory: string) {
        props.setMemory(props.index, memory);
    }

    return (
      <div>
          <Settable label={'Memory'} setValue={setMemory}/>
          <p>{props.memory}</p>
      </div>
    );
};