import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';    //make routes
import Navbar from './components/navBar/navBar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import CreateAttendee from './components/attendee/attendeeRegister';
import UpdateAttendee from './components/attendee/attendeeUpdate';
import CreatePresenter from './components/presenter/presenterRegister';
import AttendeeDashboard from './components/attendee/attendeeDashboard';


function App(){
    return(
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/attendee/dashboard' component={AttendeeDashboard} />
                    <Route path='/attendee/create' component={CreateAttendee} />
                    <Route path='/presenter/create' component={CreatePresenter} />
                    <Route path='/attendee/:id' component={UpdateAttendee} />
                    
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;