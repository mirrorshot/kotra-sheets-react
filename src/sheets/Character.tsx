import React, {useState} from "react";
import Wound from "./components/Wound";
import Job from "./components/Job";
import Affinity from "./components/Affinity";
import Trait from "./components/Trait";
import Flaw from "./components/Flaw";
import Item from "./components/Item";
import Nemesis from "./components/Nemesis";
import Limit from "./components/Limit";
import Memory from "./components/Memory";
import SaveLoad from "./components/SaveLoad";
import Legacy from "./components/Legacy";
import Technique from "./components/Technique";
import Ability from "./components/Ability";

export default function Character(props: {
    name?: { value: string | '', wounded: boolean | false } | { value: '', wounded: false },
    core?: { value: string | '', wounded: boolean | false } | { value: '', wounded: false },
    lineage?: { value: string | '', wounded: boolean | false } | { value: '', wounded: false },
    soul?: { value: string | '', wounded: boolean | false } | { value: '', wounded: false },
    traits?: Array<string> | [],
    legacy?: string | '',
    techniques?: Array<string> | [],
    memories?: Array<{ value: string, consumed: boolean }> | [undefined, undefined, undefined],
    jobs?: Array<string> | [],
    knight?: { value: string | '', wounded: boolean | false } | { value: '', wounded: false },
    frame?: { value: string | '', wounded: boolean | false } | { value: '', wounded: false },
    abilities?: Array<string> | [],
    affinities?: Array<{ value: string | '', score: number | 0 }>,
    limit?: { score: number | 0, overdrive: boolean | false } | { score: 0, overdrive: false },
    itemLeft?: string | '',
    itemRight?: string | '',
    flaw?: string | '',
    nemesis?: string | ''
}) {

    const [state, update] = useState({
        name: props.name ? props.name : {value: '', wounded: false},
        core: props.core ? props.core : {value: '', wounded: false},
        lineage: props.lineage ? props.lineage : {value: '', wounded: false},
        soul: props.soul ? props.soul : {value: '', wounded: false},
        traits: props.traits ? props.traits : [],
        legacy: props.legacy ? props.legacy : '',
        techniques: props.techniques ? props.techniques : [],
        memories: props.memories ? props.memories : [undefined, undefined, undefined],
        jobs: props.jobs ? props.jobs : [],
        knight: props.knight ? props.knight : {value: '', wounded: false},
        frame: props.frame ? props.frame : {value: '', wounded: false},
        abilities: props.abilities ? props.abilities : [],
        affinities: props.affinities ? props.affinities : [{value: '', score: 0}, {value: '', score: 0}],
        limit: props.limit ? props.limit : {score: 0, overdrive: false},
        itemLeft: props.itemLeft ? props.itemLeft : '',
        itemRight: props.itemRight ? props.itemRight : '',
        flaw: props.flaw ? props.flaw : '',
        nemesis: props.nemesis ? props.nemesis : ''
    });

    function setTrait(value: string, index: number) {
        const traits = state.traits;
        traits[index] = value;
        update({...state, traits: traits});
    }

    function setName(v: string) {
        update({...state, name: {...state.name, value: v}});
    }

    function woundName(w: boolean) {
        update({...state, name: {...state.name, wounded: w}});
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

    function setMemory(m: { value: string, consumed: boolean }, index: number) {
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

    function load(loaded: {
        name?: { value: string | '', wounded: boolean | false },
        core?: { value: string | '', wounded: boolean | false },
        lineage?: { value: string | '', wounded: boolean | false },
        soul?: { value: string | '', wounded: boolean | false },
        traits?: Array<string>,
        legacy?: string,
        techniques?: Array<string>,
        memories?: Array<{ value: string, consumed: boolean }>,
        jobs?: Array<string>,
        knight?: { value: string | '', wounded: boolean | false },
        frame?: { value: string | '', wounded: boolean | false },
        abilities?: Array<string>,
        affinities?: Array<{ value: string | '', score: number | 0 }>,
        limit?: { score: number | 0, overdrive: boolean | false },
        itemLeft?: string,
        itemRight?: string,
        flaw?: string
        nemesis?: string
    }) {
        const data = {
            name: loaded.name ? loaded.name : {value: '', wounded: false},
            core: loaded.core ? loaded.core : {value: '', wounded: false},
            lineage: loaded.lineage ? loaded.lineage : {value: '', wounded: false},
            soul: loaded.soul ? loaded.soul : {value: '', wounded: false},
            traits: loaded.traits ? loaded.traits : [],
            legacy: loaded.legacy ? loaded.legacy : '',
            techniques: loaded.techniques ? loaded.techniques : [],
            memories: loaded.memories ? loaded.memories : [undefined, undefined, undefined],
            jobs: loaded.jobs ? loaded.jobs : [],
            knight: loaded.knight ? loaded.knight : {value: '', wounded: false},
            frame: loaded.frame ? loaded.frame : {value: '', wounded: false},
            abilities: loaded.abilities ? loaded.abilities : [],
            affinities: loaded.affinities ? loaded.affinities : [{value: '', score: 0}, {value: '', score: 0}],
            limit: loaded.limit ? loaded.limit : {score: 0, overdrive: false},
            itemLeft: loaded.itemLeft ? loaded.itemLeft : '',
            itemRight: loaded.itemRight ? loaded.itemRight : '',
            flaw: loaded.flaw ? loaded.flaw : '',
            nemesis: loaded.nemesis ? loaded.nemesis : ''
        };
        update(data);
    }

    return (
        <div className="OneShot">
            <SaveLoad data={state} load={load}/>
            <Wound label='Name' wound={state.name} setWound={setName} setWounded={woundName}/>
            <Wound label='Core' wound={state.core} setWound={setCore} setWounded={woundCore}/>
            <Wound label='Lineage' wound={state.lineage} setWound={setLineage} setWounded={woundLineage}/>
            <Wound label='Soul' wound={state.soul} setWound={setSoul} setWounded={woundSoul}/>
            <Job job={state.jobs[0]} updateJob={(j: string) => setJob(j, 0)}/>
            <Job job={state.jobs[1]} updateJob={(j: string) => setJob(j, 1)}/>
            <Wound label={'Knight'} wound={state.knight}
                   setWound={setKnight}
                   setWounded={woundKnight}/>
            <Wound label={'Frame'} wound={state.frame}
                   setWound={setFrame}
                   setWounded={woundFrame}/>
            <Ability value={state.abilities[0]}
                     setValue={(v: string) => setAbility(v, 0)}/>
            <Ability value={state.abilities[1]}
                     setValue={(v: string) => setAbility(v, 1)}/>
            <Affinity affinity={state.affinities[0]}
                      updateAffinity={(v: string) => setAffinity(v, 0)}
                      updateScore={(s: number) => setAffinityScore(s, 0)}/>
            <Affinity affinity={state.affinities[1]}
                      updateAffinity={(v: string) => setAffinity(v, 1)}
                      updateScore={(s: number) => setAffinityScore(s, 1)}/>
            {[...Array(10)]
                .map((_, i) => <Trait key={i}
                                      trait={state.traits[i]}
                                      setValue={(v: string) => setTrait(v, i)}/>)}
            {[...Array(3)]
                .map((_, i) => <Memory key={i}
                                       memory={state.memories[i]}
                                       setMemory={(m: { value: string, consumed: boolean }) => setMemory(m, i)}/>)}
            <Flaw flaw={state.flaw} updateFlaw={(f: string) => update({...state, flaw: f})}/>
            <Nemesis nemesis={state.nemesis} updateNemesis={(n: string) => update({...state, nemesis: n})}/>
            <Item item={state.itemLeft} setItem={(i: string) => update({...state, itemLeft: i})}/>
            <Item item={state.itemRight} setItem={(i: string) => update({...state, itemRight: i})}/>
            <Limit limit={state.limit} memories={[]} updateLimit={updateLimit}/>
            <Legacy
                legacy={state.legacy}
                setLegacy={(v: string) => update({...state, legacy: v})}/>

            {[...Array(8)]
                .map((_, i) => <Technique
                    key={i}
                    value={state.techniques[i]}
                    setValue={(v: string) => setTechnique(v, i)}/>)}
        </div>
    );
}
