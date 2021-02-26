import React from 'react';
import './NavigationPuzzle.css';


const NavigationPuzzle = props => {
	let navigationPuzzleClasses = ["NavigationPuzzle"];
	let puzzleIconClasses = ["PuzzleIcon", props.id];
	if(props.show){
		navigationPuzzleClasses = ["NavigationPuzzle","Show"];
	}
    return(
	<li className="PuzzleContainer" id = {props.id}>
        <div 
			className = { navigationPuzzleClasses.join(' ')} 
			color = {props.color} 
			draggable = "true" 
			onDragStart = {(e) => props.startDrag(e)} 
			onDragEnd = {(e) => props.stopDrag(e)} 
			onTouchMove = {(e) => props.touchStart(e,props.id)}
			onTouchEnd = {() => props.touchEnd(props.id)}
			>
            <svg x="0px" y="0px" viewBox="0 0 200 200">
            	<path className={props.color} d="M198.63,55.84l0.05-0.4l-58.21-0.01c-5.57,0.46-10.08-4.05-10.08-9.61v-0.45c0-3.03,1.4-5.86,
				3.71-7.81
	c4.75-4.01,7.68-10.1,7.38-16.87c-0.49-11.02-9.71-19.86-20.75-19.89c-11.54-0.03-20.9,9.31-20.9,20.83
	c0,6.43,2.92,12.18,7.49,16.01c2.29,1.91,3.62,4.74,3.62,7.73v0.45c0,5.57-4.51,10.08-10.08,10.08l-45.71-0.23l-0.07-0.03l-0.1,0.12
	l0,0l0.23,43.86c0,5.57-4.51,10.08-10.08,10.08h-0.45c-2.98,0-5.82-1.33-7.73-3.62c-3.82-4.58-9.57-7.49-16.01-7.49
	c-11.52,0-20.86,9.36-20.84,20.89c0.03,11.04,8.86,20.27,19.89,20.75c6.76,0.3,12.86-2.63,16.87-7.38c1.95-2.31,4.78-3.71,7.81-3.71
	h0.45c5.57,0,10.08,4.51,10.08,10.08v60.07l-0.07-0.05l0.3-0.19l-0.23,0.23h45.71c5.57,0,10.08-4.51,10.08-10.08v-0.45
	c0-3.03-1.4-5.86-3.71-7.81c-4.74-4.01-7.68-10.1-7.38-16.87c0.49-11.02,9.71-19.86,20.75-19.89c11.54-0.03,20.89,9.31,20.89,20.84
	c0,6.43-2.92,12.18-7.49,16.01c-2.29,1.91-3.62,4.74-3.62,7.73v0.45c0,5.57,4.51,10.08,10.08,10.08l58.21-0.23l0.07-0.03h0.99
	l-0.17-0.44L200,141.2c-0.01-5.57-4.52-10.07-10.08-10.07h-0.45c-2.98,0-5.82,1.33-7.73,3.62c-3.82,4.58-9.57,7.51-16,7.51
	c-11.52,0.01-20.88-9.34-20.85-20.88c0.02-11.04,8.85-20.27,19.87-20.77c6.76-0.3,12.86,2.62,16.88,7.36
	c1.95,2.31,4.78,3.71,7.82,3.7h0.45c5.57-0.01,10.07-4.52,10.07-10.08l-0.05-46.17l-0.07,0.05"/>
			</svg>		
        </div>
		<div className={`PuzzleBall ${props.color}`}>

		</div>
		<div className={puzzleIconClasses.join(' ')}></div>
	</li>
    );
};

export default NavigationPuzzle;