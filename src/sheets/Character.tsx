import React, {useState} from "react";
import Wound, {WoundData, toWound} from "./components/Wound";
import Job from "./components/Job";
import Affinity from "./components/Affinity";
import Trait from "./components/Trait";
import Flaw from "./components/Flaw";
import Item from "./components/Item";
import Nemesis from "./components/Nemesis";
import Limit from "./components/Limit";
import Memory, {ExtraMemoryData, MemoryData, toExtraMemory, toMemory} from "./components/Memory";
import SaveLoad from "./components/SaveLoad";
import Legacy from "./components/Legacy";
import Technique from "./components/Technique";
import Ability from "./components/Ability";

export function toCharacter(input: CharacterSheetInput): CharacterSheet {
    return {
        name: toMemory(input.name),
        core: toWound(input.core),
        lineage: toWound(input.lineage),
        soul: toWound(input.soul),
        traits: input.traits
            ? [...input.traits].fill('', input.traits.length, 10)
            : Array(10).fill(''),
        legacy: input.legacy
            ? input.legacy
            : '',
        techniques: input.techniques
            ? [...input.techniques].fill('', input.techniques.length, 8)
            : Array(8).fill(''),
        memories: input.memories
            ? input.memories.map(toExtraMemory)
            : Array(3).fill(undefined),
        jobs: input.jobs
            ? input.jobs
            : ['', ''],
        knight: toWound(input.knight),
        frame: toWound(input.frame),
        abilities: input.abilities
            ? input.abilities
            : ['', ''],
        affinities: input.affinities
            ? [...input.affinities].fill({value: '', score: 0}, input.affinities.length, 2)
            : Array(2).fill({
                value: '',
                score: 0
            }),
        limit: input.limit
            ? {
                score: input.limit.score,
                overdrive: input.limit.overdrive !== undefined ? input.limit.overdrive : input.limit.score > 8
            }
            : {score: 0, overdrive: false},
        itemLeft: input.itemLeft ? input.itemLeft : '',
        itemRight: input.itemRight ? input.itemRight : '',
        flaw: input.flaw ? input.flaw : '',
        nemesis: input.nemesis ? input.nemesis : ''
    };
}

export type CharacterSheetInput = {
    name?: { value: string, consumed?: boolean | false } | { value: '', consumed: false },
    core?: { value: string, wounded?: boolean | false } | { value: '', wounded: false },
    lineage?: { value: string, wounded?: boolean | false } | { value: '', wounded: false },
    soul?: { value: string, wounded?: boolean | false } | { value: '', wounded: false },
    traits?: Array<string> | [],
    legacy?: string | '',
    techniques?: Array<string> | [],
    memories?: Array<{ value: string, consumed?: boolean | false }> | [undefined, undefined, undefined],
    jobs?: Array<string> | [],
    knight?: { value: string, wounded?: boolean | false } | { value: '', wounded: false },
    frame?: { value: string, wounded?: boolean | false } | { value: '', wounded: false },
    abilities?: Array<string> | [],
    affinities?: Array<{ value: string | '', score: number | 0 }>,
    limit?: { score: number | 0, overdrive?: boolean | false } | { score: 0, overdrive: false },
    itemLeft?: string | '',
    itemRight?: string | '',
    flaw?: string | '',
    nemesis?: string | '',
    sheet?: CharacterSheet | undefined
};

export type CharacterSheet = {
    name: MemoryData,
    core: WoundData,
    lineage: WoundData,
    soul: WoundData,
    traits: Array<string>,
    legacy: string,
    techniques: Array<string>,
    memories: Array<ExtraMemoryData>,
    jobs: Array<string> | [],
    knight: WoundData,
    frame: WoundData,
    abilities: Array<string>,
    affinities: Array<{ value: string, score: number }>,
    limit: { score: number, overdrive: boolean },
    itemLeft: string,
    itemRight: string,
    flaw: string,
    nemesis: string
};

export default function Character(props: CharacterSheetInput) {

    const [state, update] = useState(props.sheet ?? toCharacter(props));

    function setTrait(value: string, index: number) {
        const traits = state.traits;
        traits[index] = value;
        update({...state, traits: traits});
    }

    function setName(v: string) {
        update({...state, name: toMemory({...state.name, value: v})});
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
        const techniques = state.techniques;
        techniques[index] = v;
        update({...state, techniques: techniques});
    }

    function setJob(v: string, index: number) {
        state.jobs[index] = v;
        update(state);
    }

    function setAbility(v: string, index: number) {
        state.abilities[index] = v;
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

    function setAffinity(v: string, index: number) {
        const affinities = state.affinities;
        affinities[index].value = v;
        update({...state, affinities: affinities});
    }

    function setAffinityScore(s: number, index: number) {
        const affinities = state.affinities;
        affinities[index].score = s;
        update({...state, affinities: affinities});
    }

    function setMemory(m: MemoryData, index: number) {
        const memories = state.memories;
        memories[index] = m;
        update({...state, memories: memories});
    }

    function updateLimit(l: {
        score: number,
        overdrive: boolean
    }) {
        update({...state, limit: l})
    }

    function load(loaded: CharacterSheetInput) {
        update(toCharacter(loaded));
    }

    return (
        <div className="OneShot">
            <SaveLoad data={state} load={load}/>
            <Memory label='Name' memory={state.name} setMemory={setName}/>
            <Wound label='Core' wound={state.core} setWound={setCore} setWounded={woundCore}/>
            <Wound label='Lineage' wound={state.lineage} setWound={setLineage} setWounded={woundLineage}/>
            <Wound label='Soul' wound={state.soul} setWound={setSoul} setWounded={woundSoul}/>
            {[...state.jobs]
                .map((j, i) => < Job key={i} job={j} updateJob={(j: string) => setJob(j, i)}/>)
            }
            <Wound label={'Knight'} wound={state.knight} setWound={setKnight} setWounded={woundKnight}/>
            <Wound label={'Frame'} wound={state.frame} setWound={setFrame} setWounded={woundFrame}/>
            {[...state.abilities]
                .map((a, i) => <Ability key={i} value={a}
                                        setValue={(v: string) => setAbility(v, i)}/>)}
            {[...state.affinities]
                .map((a, i) => <Affinity key={i} affinity={a}
                                         updateAffinity={(v: string) => setAffinity(v, i)}
                                         updateScore={(s: number) => setAffinityScore(s, i)}/>)}
            {[...state.traits]
                .map((t, i) => <Trait key={i}
                                      trait={t}
                                      setValue={(v: string) => setTrait(v, i)}/>)}
            {[...state.memories]
                .map((m, i) => <Memory key={i}
                                       memory={m}
                                       setMemory={(m: MemoryData) => setMemory(m, i)}/>)}
            <Flaw flaw={state.flaw} updateFlaw={(f: string) => update({...state, flaw: f})}/>
            <Nemesis nemesis={state.nemesis} updateNemesis={(n: string) => update({...state, nemesis: n})}/>
            <Item item={state.itemLeft} setItem={(i: string) => update({...state, itemLeft: i})}/>
            <Item item={state.itemRight} setItem={(i: string) => update({...state, itemRight: i})}/>
            <Limit limit={state.limit} memories={[]} updateLimit={updateLimit}/>
            <Legacy
                legacy={state.legacy}
                setLegacy={(v: string) => update({...state, legacy: v})}/>

            {[...state.techniques]
                .map((t, i) => <Technique
                    key={i}
                    value={t}
                    setValue={(v: string) => setTechnique(v, i)}/>)}
        </div>
    );
}
