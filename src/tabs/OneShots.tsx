import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {useState} from "react";
import Modal from "../sheets/components/Modal";
import OneShot, {OneShotSheet, toOneShotCharacter} from "../sheets/OneShot";

export type OneShotsProps = {
    characters: Array<OneShotSheet>,
    add: Function,
    remove: Function
};

export default function OneShots(props: OneShotsProps) {

    const [visible, commute] = useState(false);

    function createCharacter() {
        commute(true);
    }

    function addCharacter(name: string) {
        props.characters.push(toOneShotCharacter({name: {value: name}}));
        commute(false);
    }

    function removeCharacter(i: number) {
        props.characters.splice(i, 1);
    }

    return (
        <div>
            {visible
                ? <Modal label={'Name'}
                         value={''}
                         action={'Create'}
                         apply={addCharacter}
                         abort={() => commute(false)}/>
                : null}
            <Tabs>
                <TabList>
                    {[...props.characters]
                        .map((c, i) => <Tab key={i}>
                            {c.name.value}
                            <button onClick={() => removeCharacter(i)}>x</button>
                        </Tab>)}
                    <button onClick={createCharacter}>+</button>
                </TabList>
                {[...props.characters]
                    .map((c, i) => <TabPanel key={i}><OneShot key={i} sheet={c}/></TabPanel>)}
            </Tabs>
        </div>
    );
};