import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';    //make routes
import Navbar from './components/navBar/navBar';
import ViewEditors from './components/views/editor.view';
import ViewReviewers from './components/views/reviewer.view';
import ViewAdmins from './components/views/admin.view';
import Footer from './components/footer/footer';

function App(){
    return(
        <div>
            <Router>
                <Navbar/>
                    <section>
                        <Switch>
                            <Route path="/editor" component={ViewEditors} />
                            <Route path="/reviewer" component={ViewReviewers} />
                            <Route path="/admin" component={ViewAdmins} />
                        </Switch>
                    </section>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;