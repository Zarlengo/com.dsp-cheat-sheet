import React from 'react';
import Assemblers from './components/Assemblers';
import Belts from './components/Belts';
import ChemicalFacility from './components/ChemicalFacility';
import Matrix from './components/Matrix';
import Mining from './components/Mining';
import OilRefinery from './components/OilRefinery';
import ParticleCollider from './components/ParticleCollider';
import Smelting from './components/Smelting';
import Sorters from './components/Sorters';
import Storage from './components/Storage';

import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">Dyson Sphere Program</header>
            <Mining />
            <Belts />
            <Sorters />
            <Smelting />
            <Matrix />
            <Assemblers />
            <ChemicalFacility />
            <OilRefinery />
            <ParticleCollider />
            <Storage />
        </div>
    );
}

export default App;
