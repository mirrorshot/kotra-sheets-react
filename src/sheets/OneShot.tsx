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
import Legacy from "./Legacy";

function OneShot() {

    const [state, update] = useState({
        name: {value: '', wounded: false},
        core: {value: '', wounded: false},
        lineage: {value: '', wounded: false},
        soul: {value: '', wounded: false},
        traits: ['', '', '', ''],
        legacy: '',
        job: '',
        affinity: {value: '', score: 0},
        limit: {score: 0, overdrive: false},
        itemLeft: '',
        itemRight: '',
        flaw: '',
        nemesis: ''
    });

    function setTrait(value: string, index: number) {
        state.traits[index] = value;
        update(state);
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

    function woundLineage(w: boolean) {
        update({...state, lineage: {...state.lineage, wounded: w}});
    }

    function setSoul(v: string) {
        update({...state, soul: {...state.soul, value: v}});
    }

    function woundSoul(w: boolean) {
        update({...state, soul: {...state.soul, wounded: w}});
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
            <button onClick={() => Converter.compress(state)}>Save</button>
            <Wound label='Name' wound={state.name} setWound={setName} setWounded={woundName}/>
            <Wound label='Core' wound={state.core} setWound={setCore} setWounded={woundCore}/>
            <Wound label='Lineage' wound={state.lineage} setWound={setLineage} setWounded={woundLineage}/>
            <Wound label='Soul' wound={state.soul} setWound={setSoul} setWounded={woundSoul}/>
            <Job job={state.job} updateJob={(j: string) => update({...state, job: j})}/>
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
        </div>
    );
}

export default OneShot;
