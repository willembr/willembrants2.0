import React,{Component} from 'react';
import MainPuzzle from '../../Components/UX/MainPuzzle/MainPuzzle';
import NavigationPuzzles from '../../Components/UX/NavigationPuzzles/NavigationPuzzles';
import './Navigation.css';

class Navigation extends Component{
    state = {
        initial:true,
        navigateMe:false,
        pages:{
            skills:{
                active:false,
                color:"Red",
                left:null,
                bottom:null
            },
            creations:{
                active:false,
                color:"Yellow",
                left:null,
                bottom:null
            },
            passions:{
                active:false,
                color:"Light-blue",
                left:null,
                bottom:null
            },
            contact:{
                active:false,
                color:"Dark-blue",
                left:null,
                bottom:null
            }
        }
    }


    toggleMainPuzzleHandler = () => {
        this.setState(prevState => ({
            navigateMe: !prevState.navigateMe,
            initial:false
        }));
    }

    startDragHandler = (e) => {
        e.target.classList.add('Hide');
    }

    stopDragHandler = (e) => {
        e.target.classList.remove('Hide');
    }

    touchStartHandler = (e,identifier) => {
        let elementMove = document.querySelector(`#${identifier}`);
        let touchLocation = e.targetTouches[0];

        // SET ONLY ONCE => INITIAL LEFT EN BOTTOM VALUE FOR EVERY PUZZLE TO RETURN TO DEFAULT

        if(!this.state.pages[identifier].bottom)
        {
            const updatePages = { ...this.state.pages };
            const updatePage = { ...updatePages[identifier] };
            updatePage.left = Math.round(elementMove.getBoundingClientRect().left);
            updatePage.bottom = Math.round((window.innerHeight - elementMove.getBoundingClientRect().bottom) - (elementMove.getBoundingClientRect().width / 2) - 3);

            updatePages[identifier] = updatePage;

            this.setState({
                pages:updatePages
            });
        }

         elementMove.style.left = (touchLocation.pageX - (elementMove.getBoundingClientRect().width / 2)) +  'px' ;
         elementMove.style.bottom =  window.innerHeight - (touchLocation.pageY + elementMove.getBoundingClientRect().height) + 'px';
         elementMove.style.width = "7em";

    }

    touchEndHandler = (e,identifier) => {
        const puzzleMoved = document.querySelector(`#${identifier}`);
        this.backToPositionAnimation(puzzleMoved,this.state.pages[identifier]);
    }

    backToPositionAnimation = (puzzleMoved,original) => {
        let bottom = Math.round((window.innerHeight - puzzleMoved.getBoundingClientRect().bottom));
        let left = puzzleMoved.getBoundingClientRect().left;
        let size = parseInt(puzzleMoved.style.width);

        const originalBottom = original.bottom;
        const originalLeft = original.left;

        // THE SMALLER THE NUMBER => THE FASTER IT GOES
        const SPEED_REPOSITION = 40;

        // THIS GIVE THE CORRECT VALUE TO GIVE A DIAGONAL IMPRESSION OF THE RE-POSITIONING OF THE PUZZLE
        let fastLeft = Math.abs((left - originalLeft) / SPEED_REPOSITION);
        let fastBottom = Math.abs((bottom - originalBottom) / SPEED_REPOSITION);

        let resizePuzzle = setInterval(() => {
            if( size === 4){
                clearInterval(resizePuzzle);
            }
            else{
                size -= 0.5;
                puzzleMoved.style.width = size + 'em';

            }
        }, 1);

        // THE ANIMATION TO RE-POSITION THE PUZZLE PIECE IF NOT CORRECTLY DROPPED
        let animation = setInterval(() => {
            if(left === originalLeft && bottom === originalBottom){
                clearInterval(animation);
            }
            else {
                if( left !== originalLeft){ 
                    if(left > originalLeft){
                        left -= fastLeft;
                    } else {
                        left += fastLeft;
                    }  
                    puzzleMoved.style.left = left + 'px'
                    //  GIVING AN ABSOLUTE VALUE SO THE CLEARINTERVAL WILL OCCUR
                    if(Math.abs(left - originalLeft) < 5){
                        fastLeft = 1;
                        left = Math.round(left);
                    }

                }
                if( bottom !== originalBottom){
                    if(bottom > originalBottom){
                        bottom -= fastBottom;
                    } else {
                        bottom += fastBottom;
                    }  
                    puzzleMoved.style.bottom = bottom + 'px';
                    //  GIVING AN ABSOLUTE VALUE SO THE CLEARINTERVAL WILL OCCUR
                    if(Math.abs(bottom - originalBottom) < 5){
                        fastBottom = 1;
                        bottom = Math.round(bottom);
                    }
                }
            }
         }, 1);


    }

    render(){
        return(
            <div className="Navigation">
                <section className="Title">
                      <h1>Willem Brants</h1>
                      <h2>Web application developper</h2>
                </section>
                <MainPuzzle
                    toggle = {this.toggleMainPuzzleHandler}
                    fullPuzzle = {this.state.navigateMe}
                />
                <NavigationPuzzles
                    show={this.state.navigateMe}
                    startDrag={this.startDragHandler}
                    stopDrag={this.stopDragHandler}
                    touchStart = {this.touchStartHandler}
                    touchEnd = {this.touchEndHandler}
                    pages = {this.state.pages}
                />
            </div>
        );
    }
};

export default Navigation;