import React from 'react';
import './style.css';

function Smelting() {
    const data = require('./data.json');
    const dataReact = [];
    data.forEach((element, index) => {
        console.log(element);
        dataReact.push(
            <li key={index}>
                {element.consume[0].name} to {element.produce[0].name}
            </li>
        );
    });
    return (
        <div>
            Smelting
            <ul>{dataReact}</ul>
        </div>
    );
}
export default Smelting;
