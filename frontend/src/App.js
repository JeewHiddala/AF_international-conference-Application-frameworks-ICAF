import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';    //make routes
import Navbar from './components/navBar/navBar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Login from './components/userLogin/login';
import CreateAttendee from './components/attendee/attendeeRegister';
import UpdateAttendee from './components/attendee/attendeeUpdate';
import UpdatePresenter from './components/presenter/presenterUpdate';
import CreatePresenter from './components/presenter/presenterRegister';
import AttendeeDashboard from './components/attendee/attendeeDashboard';
import PresenterDashboard from './components/presenter/presenterDashboard';

import AddAttendeePayment from './components/attendeePayment/makeAttendeePayment';


function App(){
    return(
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/attendee/create' component={CreateAttendee} />
                    <Route path='/presenter/create' component={CreatePresenter} />
                    <Route path='/login' component={Login} />
                    <Route path='/attendee/pay/store' component={AddAttendeePayment} />

                    <Route path='/attendee/dashboard' component={AttendeeDashboard} />
                    <Route path='/presenter/dashboard' component={PresenterDashboard} />
                    <Route path='/attendee/:id' component={UpdateAttendee} />
                    <Route path='/presenter/:id' component={UpdatePresenter} />



                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;