import React, {useState} from "react";
import Wound, {toWound, WoundData, WoundInput} from "./components/Wound";
import Job from "./components/Job";
import Affinity from "./components/Affinity";
import Trait from "./components/Trait";
import Flaw from "./components/Flaw";
import Item from "./components/Item";
import Nemesis from "./components/Nemesis";
import Limit from "./components/Limit";
import Legacy from "./components/Legacy";
import Technique from "./components/Technique";
import Ability from "./components/Ability";
import SaveLoad from "./components/SaveLoad";
import Memory, {MemoryData, toMemory} from "./components/Memory";

export type OneShotSheet = {
    name: MemoryData,
    core: WoundData,
    lineage: WoundData,
    soul: WoundData,
    traits: Array<string>,
    legacy: string,
    techniques: Array<string>,
    job: string,
    knight: WoundData,
    frame: WoundData,
    ability: string,
    affinity: { value: string, score: number },
    limit: { score: number, overdrive: boolean },
    itemLeft: string,
    itemRight: string,
    flaw: string,
    nemesis: string
};

export type OneShotInput = {
    name?: { value: string, consumed?: boolean },
    core?: WoundInput,
    lineage?: WoundInput,
    soul?: WoundInput,
    traits?: Array<string>,
    legacy?: string,
    techniques?: Array<string>,
    job?: string,
    knight?: WoundInput,
    frame?: WoundInput,
    ability?: string,
    affinity?: { value: string, score?: number },
    limit?: { score: number, overdrive?: boolean },
    itemLeft?: string,
    itemRight?: string,
    flaw?: string,
    nemesis?: string,
    sheet?: OneShotSheet
};

export function toOneShotCharacter(input: OneShotInput): OneShotSheet {
    return {
        name: toMemory(input.name),
        core: toWound(input.core),
        lineage: toWound(input.lineage),
        soul: toWound(input.soul),
        traits: [...input.traits ?? Array(4)]
            .fill('', input.traits?.length ?? 0, 4),
        legacy: input.legacy ?? '',
        techniques:  [...input.techniques ?? Array(3)]
            .fill('', input.techniques?.length ?? 0, 3),
        job: input.job ?? '',
        knight: toWound(input.knight),
        frame: toWound(input.frame),
        ability: input.ability ?? '',
        affinity: {...(input.affinity ?? {value: ''}), score: input.affinity?.score ?? 0},
        limit: {
            score: input.limit?.score ?? 0,
            overdrive: input.limit?.overdrive !== undefined ? input.limit.overdrive : ((input.limit?.score ?? 0) > 8)
        },
        itemLeft: input.itemLeft ?? '',
        itemRight: input.itemRight ?? '',
        flaw: input.flaw ?? '',
        nemesis: input.nemesis ?? ''
    };
}

export default function OneShot(props: OneShotInput) {

    const [state, update] = useState(props.sheet ?? toOneShotCharacter(props));

    function setTrait(value: string, index: number) {
        state.traits[index] = value;
        update(state);
    }

    function setName(name: MemoryData) {
        update({...state, name: {...state.name, value: name.value}});
    }

    function setCore(v: string) {
        update({...state, core: {...state.core, value: v}});
    }

    function woundCore(w: boolean) {
        update({...state, core: {...state.core, wounded: w}});
    }

    function setLineage(v: string) {
        update({...state, lineage: {...state.lineage, value: v}});
    }

    function setTechnique(v: string, index: number) {
        state.techniques[index] = v;
        update(state);
    }

    function woundLineage(w: boolean) {
        update({...state, lineage: {...state.lineage, wounded: w}});
    }

    function setSoul(v: string) {
        update({...state, soul: {...state.soul, value: v}});
    }

    function woundSoul(w: boolean) {
        update({...state, soul: {...state.soul, wounded: w}});
    }

    function setKnight(v: string) {
        update({...state, knight: {...state.knight, value: v}});
    }

    function woundKnight(w: boolean) {
        update({...state, knight: {...state.knight, wounded: w}});
    }

    function setFrame(v: string) {
        update({...state, frame: {...state.frame, value: v}});
    }

    function woundFrame(w: boolean) {
        update({...state, frame: {...state.frame, wounded: w}});
    }

    function setAffinity(v: string) {
        update({...state, affinity: {...state.affinity, value: v}});
    }

    function setAffinityScore(s: number) {
        update({...state, affinity: {...state.affinity, score: s}});
    }

    function updateLimit(l: {
        score: number,
        overdrive: boolean
    }) {
        update({...state, limit: l})
    }

    return (
        <div className="OneShot">
            <SaveLoad data={state} load={update}/>
            <Memory label={'Name'} memory={state.name} setMemory={setName}/>
            <Wound label={'Core'} wound={state.core} setWound={setCore} setWounded={woundCore}/>
            <Wound label={'Lineage'} wound={state.lineage} setWound={setLineage} setWounded={woundLineage}/>
            <Wound label={'Soul'} wound={state.soul} setWound={setSoul} setWounded={woundSoul}/>
            <Job job={state.job} updateJob={(j: string) => update({...state, job: j})}/>
            <Wound label={'Knight'} wound={state.knight} setWound={setKnight} setWounded={woundKnight}/>
            <Wound label={'Frame'} wound={state.frame} setWound={setFrame} setWounded={woundFrame}/>
            <Ability value={state.ability} setValue={(v: string) => update({...state, ability: v})}/>
            <Affinity affinity={state.affinity} updateAffinity={setAffinity} updateScore={setAffinityScore}/>
            <Trait trait={state.traits[0]} setValue={(v: string) => setTrait(v, 0)}/>
            <Trait trait={state.traits[1]} setValue={(v: string) => setTrait(v, 1)}/>
            <Trait trait={state.traits[2]} setValue={(v: string) => setTrait(v, 2)}/>
            <Trait trait={state.traits[3]} setValue={(v: string) => setTrait(v, 3)}/>
            <Flaw flaw={state.flaw} updateFlaw={(f: string) => update({...state, flaw: f})}/>
            <Nemesis nemesis={state.nemesis} updateNemesis={(n: string) => update({...state, nemesis: n})}/>
            <Item item={state.itemLeft} setItem={(i: string) => update({...state, itemLeft: i})}/>
            <Item item={state.itemRight} setItem={(i: string) => update({...state, itemRight: i})}/>
            <Limit limit={state.limit} memories={[]} updateLimit={updateLimit}/>
            <Legacy
                legacy={state.legacy}
                setLegacy={(v: string) => update({...state, legacy: v})}/>
            <Technique value={state.techniques[0]} setValue={(v: string) => setTechnique(v, 0)}/>
            <Technique value={state.techniques[1]} setValue={(v: string) => setTechnique(v, 1)}/>
            <Technique value={state.techniques[2]} setValue={(v: string) => setTechnique(v, 2)}/>
        </div>
    );
}
