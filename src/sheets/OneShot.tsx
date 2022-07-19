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

function OneShot() {

    return (
        <div className="OneShot">
            <Wound label='Name'/>
            <Wound label='Core'/>
            <Wound label='Lineage'/>
            <Wound label='Soul'/>
            <Job/>
            <Affinity/>
            <Trait/>
            <Trait/>
            <Trait/>
            <Trait/>
            <Flaw/>
            <Nemesis/>
            <Item/>
            <Item/>
            <Limit/>
        </div>
    );
}

export default OneShot;
