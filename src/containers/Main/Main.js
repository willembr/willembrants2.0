import React,{Component} from 'react';
import Navigation from '../../Components/UX/Navigation/Navigation';


class Main extends Component{
    state = {
        initial:true
    }
    render(){
        return(
        <div>
            <Navigation/>
        </div>
        );
    }
};
export default Main;