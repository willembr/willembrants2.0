import React,{Component} from 'react';
import Navigation from '../../Components/UX/Navigation/Navigation';


class Main extends Component{
    state = {
        navigateMe:false
    }

    toggleMainPuzzleHandler = () => {
        this.setState(prevState => ({
            navigateMe: !prevState.navigateMe
        }));
    }
    render(){
        console.log(this.state.navigateMe);
        return(
        <div>
            <Navigation 
                toggle = {this.toggleMainPuzzleHandler}
                fullPuzzle = {this.state.navigateMe} 
                />
        </div>
        );
    }
};
export default Main;