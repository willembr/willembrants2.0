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
        console.log(identifier);
        let elementMove = document.querySelector(`#${identifier}`);
        let touchLocation = e.targetTouches[0];

        // SET ONLY ONCE => INITIAL LEFT EN BOTTOM VALUE FOR EVERY PUZZLE TO RETURN TO DEFAULT

        if(!this.state.pages[identifier].bottom)
        {
            const updatePages = { ...this.state.pages };
            const updatePage = { ...updatePages[identifier] };
            updatePage.left = Math.round(elementMove.getBoundingClientRect().left);
            updatePage.bottom = Math.round(elementMove.getBoundingClientRect().bottom);

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
        const elementMove = document.querySelector(`#${identifier}`);
        const left = this.state.pages[identifier].left;

        elementMove.animate([
            {width: '4em',left:`${left}px`,bottom:'46px'}
        ],{
            duration:500,
            fill:"forwards"
        });
        setTimeout(()=> {
            elementMove.removeAttribute('style');
            elementMove.setAttribute('style','left:20px;bottom:46px;width:4em');
        },500);
    }

    render(){
        // console.log(this.state.pages);
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