import React,{Component} from 'react';
import MainPuzzle from '../../Components/UX/MainPuzzle/MainPuzzle';
import NavigationPuzzles from '../../Components/UX/NavigationPuzzles/NavigationPuzzles';
import './Navigation.css';

class Navigation extends Component{
    state = {
        initial:true,
        navigateMe:false,
        dropPuzzle : {
            left:0,
            right:0,
            top:0,
            bottom:0
        },
        pages:{
            skills:{
                color:"Red",
                left:null,
                bottom:null
            },
            creations:{
                color:"Yellow",
                left:null,
                bottom:null
            },
            passions:{
                color:"Light-blue",
                left:null,
                bottom:null
            },
            contact:{
                color:"Dark-blue",
                left:null,
                bottom:null
            }
        }
    }

    componentDidMount(){
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
        const mainPuzzle = document.querySelector('.MainPuzzle').getBoundingClientRect();
        const updateDropPuzzle = { ...this.state.dropPuzzle };
        updateDropPuzzle.left = mainPuzzle.left;
        updateDropPuzzle.right = mainPuzzle.right;
        updateDropPuzzle.bottom = mainPuzzle.bottom;
        updateDropPuzzle.top = mainPuzzle.top;
        this.setState({
            dropPuzzle : updateDropPuzzle
        });
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
        let elementMove = document.querySelector(`#${identifier} .NavigationPuzzle`);
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
         // MAKING THE ELEMENT MOVE
         elementMove.style.left = (touchLocation.pageX - (elementMove.getBoundingClientRect().width / 2)) +  'px' ;
         elementMove.style.bottom =  window.innerHeight - (touchLocation.pageY + elementMove.getBoundingClientRect().height) + 'px';
         elementMove.style.width = "7em";


        // DETECT NEARBY ELEMENT
        // let nearbyDetectationField = { ...this.state.dropPuzzle};
        // nearbyDetectationField.left = nearbyDetectationField.left - (40 * ( nearbyDetectationField.left/ 100 ));
        // nearbyDetectationField.right = nearbyDetectationField.right + (20 * ( nearbyDetectationField.right / 100 ));
        // nearbyDetectationField.top = nearbyDetectationField.top - (40 * ( nearbyDetectationField.top/ 100 ));
        // nearbyDetectationField.bottom = nearbyDetectationField.bottom + (20 * ( nearbyDetectationField.bottom/ 100 ));
        document.querySelector('.StrokeDash').classList.add(`${this.state.pages[identifier].color}Light`);
        


    }

    touchEndHandler = (identifier) => {
        const puzzleMoved = document.querySelector(`#${identifier} .NavigationPuzzle `);
        const drop = { ...this.state.dropPuzzle };

        if(!this.detectHit(puzzleMoved, drop)) return this.resetPuzzleAnimation(puzzleMoved,this.state.pages[identifier]);

        this.closePageAnimation(identifier);        
        //this.props.history.push(`${identifier}`);


    }

    closePageAnimation(identifier){
         document.querySelector(`#${identifier} .PuzzleBall`).animate([
            {transform: 'scale(100)'}
         ],{
             duration:1000,
             fill:'forwards'
         });
    }

    detectHit(element, drop){

        const dragEl = element.getBoundingClientRect();
        const dragX = dragEl.left + ( dragEl.width / 2 );
        const dragY = dragEl.top + ( dragEl.height / 2 );

        if( dragX < drop.left || dragX > drop.right ) return false;
        if( dragY < drop.top || dragY > drop.bottom ) return false;
        return true;

    }

    resetPuzzleAnimation = (puzzleMoved,original) => {
        let bottom = Math.round((window.innerHeight - puzzleMoved.getBoundingClientRect().bottom));
        let left = puzzleMoved.getBoundingClientRect().left;
        let size = parseInt(puzzleMoved.style.width);

        //WHEN JUST CLICKED IT WILL GIVE A SIZE OF NAN => TO AVOID BUG RETURN WHEN SIZE IS NOT A NUMBER
        if(isNaN(size)) return;

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
        let backToPosition = setInterval(() => {
            if(left === originalLeft && bottom === originalBottom){
                clearInterval(backToPosition);
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

    dropHandler = (e) => {
        //console.log(e);
    }

    dragOverHandler = (e) => {
        e.preventDefault();
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
                    dropped = {this.dropHandler}
                    dragOver = {this.dragOverHandler}
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