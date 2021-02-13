import React from 'react';
import NavigationPuzzle from './NavigationPuzzle/NavigationPuzzle';
import './NavigationPuzzles.css';


const NavigationPuzzles = props => (
    <div className="NavigationPuzzles">
        <NavigationPuzzle color="Red"/>
        <NavigationPuzzle color="Yellow"/>
        <NavigationPuzzle color="Light-blue"/>
        <NavigationPuzzle color="Dark-blue"/>
        <h4>Drag one of the puzzles to the menu puzzle</h4>
    </div>
);

export default NavigationPuzzles;