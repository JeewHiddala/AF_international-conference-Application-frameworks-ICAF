import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';    //make routes
import Navbar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import CreatePost from './components/createPost/createPost';
import Posts from './components/Posts/posts';


function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <section>
                    <Switch>
                        <Route path ="/create-post" component ={CreatePost}/>
                        <Route path ="/" component ={Posts} exact/>
                   
                    </Switch>
                </section>
                <Footer />
            </Router>
        </div>
    );
}

export default App;