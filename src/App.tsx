import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import OneShot from "./sheets/OneShot";
import Character from "./sheets/Character";

function App() {
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
                    <Tab>Character</Tab>
                    <Tab>Campaign</Tab>
                    <Tab>Place</Tab>
                </TabList>
                <TabPanel>
                    <OneShot/>
                </TabPanel>
                <TabPanel>
                    <Character/>
                </TabPanel>
                <TabPanel>
                    <p>TODO your campaign sheet here</p>
                </TabPanel>
                <TabPanel>
                    <p>TODO your places sheet here</p>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default App;
