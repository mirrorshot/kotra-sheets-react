import React, {useState} from "react";
import Converter from "../Converter";
import Wound from "./Wound";
import Job from "./Job";
import Affinity from "./Affinity";
import Trait from "./Trait";
import Flaw from "./Flaw";
import Item from "./Item";
import Nemesis from "./Nemesis";
import Limit from "./Limit";
import Memory from "./Memory";

export default function Character() {
    let m: string[] = [];
    const [character, updateCharacter] = useState({memories: m});

    function updateMemories(
        index: number,
        memory: string
    ) {
        m = [];
        let om = character.memories;
        if (memory === undefined)
            om.forEach((v, i) => {
                if (i !== index) m[i] = v
            });
        updateCharacter({...character, memories: m});
    }

    return (
        <div className="OneShot">
            <Wound label='Name'/>
            <Wound label='Core'/>
            <Wound label='Lineage'/>
            <Wound label='Soul'/>
            <Job/>
            {[...Array(3)]
                .map((_, i) => <Memory
                    key={i}
                    memory={undefined}
                    setMemory={updateMemories}
                    index={i + 1}/>)}
            <Affinity/>
            <Trait/>
            <Trait/>
            <Trait/>
            <Trait/>
            <Flaw/>
            <Nemesis/>
            <Item/>
            <Item/>
            <Limit memories={character.memories}/>
        </div>
    );
}
