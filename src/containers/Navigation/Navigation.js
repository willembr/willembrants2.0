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
                color:"Red"
            },
            creations:{
                active:false,
                color:"Yellow"
            },
            passions:{
                active:false,
                color:"Light-blue"
            },
            contact:{
                active:false,
                color:"Dark-blue"
            }
        }
    }


    toggleMainPuzzleHandler = () => {
        console.log('toggle');
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
        elementMove.style.left = (touchLocation.pageX - (elementMove.getBoundingClientRect().width / 2)) +  'px' ;
        
        elementMove.style.bottom =  window.innerHeight - (touchLocation.pageY + elementMove.getBoundingClientRect().height) + 'px';

    }

    render(){
        return(
            <div className="Navigation">
                {/* <section className="Title"> 
                      <h1>Willem Brants</h1>
                      <h2>Web application developper</h2>
                </section> */}
                <MainPuzzle 
                    toggle = {this.toggleMainPuzzleHandler}
                    fullPuzzle = {this.state.navigateMe} 
                />
                <NavigationPuzzles 
                    show={this.state.navigateMe} 
                    startDrag={this.startDragHandler} 
                    stopDrag={this.stopDragHandler}
                    touchStart = {this.touchStartHandler}
                    pages = {this.state.pages}
                />
            </div>
        );
    }
};

export default Navigation;