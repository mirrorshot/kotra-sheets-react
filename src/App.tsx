import React, {useState} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import OneShot from "./sheets/OneShot";
import {CharacterSheet} from "./sheets/Character";
import Characters from "./tabs/Caracters";
import SaveLoad from "./sheets/components/SaveLoad";
// @ts-ignore
import {v4 as uuidv4} from 'uuid';

type AppState = {
    campaign: {},
    characters: Array<CharacterSheet>,
    oneShotCharacters: Array<any>,
    places: Array<any>,
    enemies: Array<any>
};

function App() {

    function newState(): AppState {
        return {
            campaign: {},
            characters: [],
            oneShotCharacters: [],
            places: [],
            enemies: []
        }
    }

    const [state, update] = useState(newState());

    function addCharacter(c: CharacterSheet) {
        let characters = state.characters;
        characters[uuidv4()] = c;
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
                <h1>
                    KoTR:A Curriculum
                </h1>
                <p>Digital curriculum for <a href={'https://www.fumblegdr.it/products/kotra-corebook'}
                                             target={'_blank'}
                                             rel={'noreferrer'}
                >Knights of the Round: Academy</a></p>
                <SaveLoad data={state} load={update}/>
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
                    <Characters characters={state.characters}
                                add={addCharacter}
                                remove={removeCharacter}/>
                </TabPanel>
                <TabPanel>
                    <p>TODO your campaign sheet here</p>
                </TabPanel>
                <TabPanel>
                    <p>TODO your places sheet here</p>
                </TabPanel>
            </Tabs>
            <a href={'https://github.com/mirrorshot/kotra-sheets-react/'}
               target={"_blank"}
               rel={'noreferrer'}
            >Contribute on GitHub</a>
        </div>
    );
}

export default App;
