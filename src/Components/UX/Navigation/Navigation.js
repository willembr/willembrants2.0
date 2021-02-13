import React from 'react';
import MainPuzzle from './MainPuzzle/MainPuzzle';
import './Navigation.css';
import NavigationPuzzles from './NavigationPuzzles/NavigationPuzzles';

const Navigation = (props) => (
    <div className="Navigation">
        <section className="Title"> 
            <h1>Willem Brants</h1>
            <h2>Web application developper</h2>
        </section>
        <MainPuzzle 
            toggle = {props.toggle}
            fullPuzzle = {props.fullPuzzle} 
            />
        <NavigationPuzzles/>
    </div>
);

export default Navigation;