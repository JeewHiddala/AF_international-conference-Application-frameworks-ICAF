import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';    //make routes
import Navbar from './components/navBar/navBar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import CreateAttendee from './components/attendee/attendeeRegister';

function App(){
    return(
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    
                    <Route path='/attendee/create' component={CreateAttendee} />
                    
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;