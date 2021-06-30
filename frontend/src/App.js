import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import Home from './components/Home/home';
import ResearchPaperUpload from './components/Reviewer/researchPaperUploads';
import editResearchPaperUpload from './components/Reviewer/editResearchPaperUpload';
import editRevieweProfile from './components/Reviewer/editProfile';
import ConfirmApproveWorkshopProposals from './components/Reviewer/confirmWorkshopProposal';
import ReviewedResearchPaperUpload from './components/Reviewer/reviewedResearchPaperUploads';
import workshopProposal from './components/Reviewer/workshopProposal';
import EditWorkshopProposals from './components/Reviewer/editworkshopProposals';
import viewAttendees from './components/Reviewer/attendee';

function App(){
    return(
        <div>
            <Router>
                <Navbar/>
        <section>
            <Switch>
                <Route path="/workshop"component={workshopProposal}/>
                <Route path="/paperupload"component={ResearchPaperUpload}/>
                <Route path="/attendee"component={viewAttendees}/>
                <Route path="/edit/:id" component={EditWorkshopProposals} />
                <Route path="/view/:id" component={editResearchPaperUpload}/>
                <Route path="/attendee-view/:id" component={AllAttendeeDetails}/>
                <Route path="/profile" component={editRevieweProfile}/>
                <Route  path="/configure/:id" component={ReviewedResearchPaperUpload}/>       
                <Route path="/confirm/:id" component={ConfirmApproveWorkshopProposals}/>
                <Route path="/" component={Home} exact />
            </Switch>
            
        </section>       
        <Footer/>
      </Router>
        </div>
    );
}

export default App;