import React from 'react';
import './MainPuzzle.css';
import {FullPuzzle, DottedPuzzle} from './Svg/svg_puzzles';

const MainPuzzle = (props) => {
    return(
        <div className="MainPuzzle" 
                    onDrop={(e) => props.dropped(e)} 
                    onDragOver={(e) => props.dragOver(e)} 
        >   
            <div className="PuzzlePiece" onClick={props.toggle}>
                <svg className="PuzzleSvg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 300 300">
                    { !props.fullPuzzle ? <FullPuzzle/> : <DottedPuzzle/> }
                </svg>
            </div>    
            <h4 className="Menu">Menu</h4>     
        </div>
    );
}

export default MainPuzzle;