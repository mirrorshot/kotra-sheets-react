import React, {useState} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import OneShot from "./sheets/OneShot";
import {CharacterSheet, toCharacter} from "./sheets/Character";
import Characters from "./tabs/Caracters";

function App() {

    const [state, update] = useState({
        oneShots: [],
        characters:  [toCharacter({name: {value: 'Arthias'}})],
        enemies: [],
        places: [],
        campaign: {}
    });

    function addCharacter(c: CharacterSheet) {
        let characters = state.characters;
        characters.push(c);
        update({...state, characters: characters});
    }

    function removeCharacter(i: number) {
        let characters = state.characters;
        characters.splice(i, 1);
        update({...state, characters: characters});
    }

    return (
        <div className="App">
            <header className="KoTR:A Sheets">
                <p>
                    KoTR:A sheets manager
                </p>
            </header>
            <Tabs>
                <TabList>
                    <Tab>OneShot</Tab>
                    <Tab>Characters</Tab>
                    <Tab>Campaign</Tab>
                    <Tab>Place</Tab>
                </TabList>
                <TabPanel>
                    <OneShot/>
                </TabPanel>
                <TabPanel>
                    <Characters characters={state.characters} add={addCharacter} remove={removeCharacter}/>
                </TabPanel>
                <TabPanel>
                    <p>TODO your campaign sheet here</p>
                </TabPanel>
                <TabPanel>
                    <p>TODO your places sheet here</p>
                </TabPanel>
            </Tabs>
            <a
                style={{
                    color: "000"
                }}
                href={'https://github.com/mirrorshot/kotra-sheets-react/'}
                target={"_blank"}
                rel={'noreferrer'}
            >Contribute on GitHub</a>
        </div>
    );
}

export default App;
