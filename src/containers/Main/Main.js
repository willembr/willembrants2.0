import React,{Component} from 'react';
import Navigation from '../Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import Skills from '../Pages/skills/Skills';
import Creations from '../Pages/creations/Creations';
import Passions from '../Pages/passions/Passions';
import Contact from '../Pages/contact/Contact';
 
class Main extends Component{
    render(){
        return(
        <div>
            <Switch>
                <Route path='/' exact component={Navigation}/>
                <Route path='/skills' component={Skills}/>
                <Route path='/creations' component={Creations}/>
                <Route path='/passions' component={Passions}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </div>
        );
    }
};
export default Main;