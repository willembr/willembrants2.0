import React from 'react';
import './MainPuzzle.css';
import { Arrow, FullPuzzle, DottedPuzzle} from './Svg/svg_puzzles';

const MainPuzzle = (props) => {
    return(
        <div className="MainPuzzle" onDrop={(e) => props.dropped(e)} onDragOver={(e) => props.dragOver(e)} >   
            <div className="DropNav Hide">
                <h4 className="DropTxt">Drop</h4>
                <Arrow/>
            </div>
            <div className="PuzzlePiece" onClick={props.toggle}>
                    { !props.fullPuzzle ? <FullPuzzle/> : <DottedPuzzle/> }
            </div>    
            <h4 className="Menu">Menu</h4>     
        </div>
    );
}

export default MainPuzzle;