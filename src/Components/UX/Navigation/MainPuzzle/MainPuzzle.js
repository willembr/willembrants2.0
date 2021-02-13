import React from 'react';
import './MainPuzzle.css';

const MainPuzzle = (props) => {
    let PuzzlePieceClasses = ["PuzzlePiece"];
    if(props.fullPuzzle){
        PuzzlePieceClasses = ["PuzzlePiece","Clicked"];
    }
    return(
        <div className="MainPuzzle">
            <div className={PuzzlePieceClasses.join(' ')} onClick={props.toggle}></div>
            <div className="Arrow">
            </div>
            <h4 className="Menu">Menu</h4>     
        </div>
    );
}

export default MainPuzzle;