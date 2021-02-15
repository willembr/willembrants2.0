import React from 'react';
import Auxial from '../../../hoc/Auxial/Auxial';
import NavigationPuzzle from './NavigationPuzzle/NavigationPuzzle';
import './NavigationPuzzles.css';


const NavigationPuzzles = props => {
    let navigationPuzzles_classes = ["NavigationPuzzles"];
    const navigationPuzzles = Object.keys(props.pages).map( page => {
        return <NavigationPuzzle 
                    key = {page}
                    id = {page}
                    color = {props.pages[page].color}
                    startDrag = {props.startDrag}
                    stopDrag = {props.stopDrag}
                    touchStart = {props.touchStart}
                    touchEnd = {props.touchEnd}
                    show = {props.show}
        />
    })
     if(props.show){
         navigationPuzzles_classes = ["NavigationPuzzles","Show"];
     }
    return(
    <ul class={navigationPuzzles_classes.join(' ')}>
        {navigationPuzzles}
        <h4 className="NavigationPuzzles_info">Drag one of the puzzles to the menu puzzle</h4>
    </ul>
        
    
);
    };

export default NavigationPuzzles;