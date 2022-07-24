import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Character, {CharacterSheet, toCharacter} from "../sheets/Character";
import {useState} from "react";
import Modal from "../sheets/components/Modal";

export type CharactersProps = {
    characters: Array<CharacterSheet>,
    add: Function,
    remove: Function
};

export default function Characters(props: CharactersProps) {

    const [visible, commute] = useState(false);

    function createCharacter() {
        commute(true);
    }

    function addCharacter(name: string) {
        props.characters.push(toCharacter({name: {value: name}}));
        commute(false);
    }

    function removeCharacter(i: number) {
        props.characters.splice(i, 1);
    }

    return (
        <div>
            {visible
                ? <Modal type={'text'}
                         value={'Name'}
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
                    .map((c, i) => <TabPanel key={i}><Character key={i} sheet={c}/></TabPanel>)}
            </Tabs>
        </div>
    );
};