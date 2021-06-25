import './App.css';
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';    //make routes
import Navbar from './components/navBar/navBar';
import Footer from './components/footer/footer';

function App(){
    return(
        <div>
            <Router>
                <Navbar/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;