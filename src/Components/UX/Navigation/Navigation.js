import React from 'react';
import MainPuzzle from './MainPuzzle/MainPuzzle';
import './Navigation.css';

const Navigation = (props) => (
    <div className="Navigation">
        <section className="Title"> 
            <h1>Willem Brants</h1>
            <h2>Web application developper</h2>
        </section>
        <MainPuzzle/>
    </div>
);

export default Navigation;