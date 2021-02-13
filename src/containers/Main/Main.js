import React,{Component} from 'react';
import Navigation from '../../Components/UX/Navigation/Navigation';


class Main extends Component{
    state = {
        initial:true
    }

    toggleMainPuzzleHandler = () => {
        this.setState(prevState => ({
            initial: !prevState.initial
        }));
    }
    render(){
        console.log(this.state.initial);
        return(
        <div>
            <Navigation 
                toggle = {this.toggleMainPuzzleHandler}
                fullPuzzle = {this.state.initial} 
                />
        </div>
        );
    }
};
export default Main;