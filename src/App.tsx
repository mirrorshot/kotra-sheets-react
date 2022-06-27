import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import logo from './logo.svg';
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Tabs>
          <TabList>
              <Tab>OneShot</Tab>
              <Tab>Character</Tab>
              <Tab>Campaign</Tab>
              <Tab>Place</Tab>
          </TabList>
          <TabPanel>
              <OneShot />
          </TabPanel>
          <TabPanel>
              <Character />
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
