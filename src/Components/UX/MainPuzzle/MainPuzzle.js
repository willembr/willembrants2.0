import React from 'react';
import './MainPuzzle.css';

const MainPuzzle = (props) => {
    let PuzzlePieceClasses = ["PuzzlePiece"];
    if(props.fullPuzzle){
        PuzzlePieceClasses = ["PuzzlePiece","Clicked"];
    }
    return(
        <div className="MainPuzzle" 
                    onDrop={(e) => props.dropped(e)} 
                    onDragOver={(e) => props.dragOver(e)} >
            <div className={PuzzlePieceClasses.join(' ')} onClick={props.toggle}></div> 
            <h4 className="Menu">Menu</h4>   
        </div>
    );
}

export default MainPuzzle;