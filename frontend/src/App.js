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
import AllAttendeeDetails from './components/Reviewer/viewAttendeeDetails';
import CreatePost from './components/createPost/createPost';
import Posts from './components/Posts/posts';
import updatePosts from './components/updatePost/updatePost';
import editEditorProfile from './components/editEditorProfile/editEditorProfile';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <section>
          <Switch>
            <Route path="/workshop" component={workshopProposal} />
            <Route path="/paperupload" component={ResearchPaperUpload} />
            <Route path="/attendee" component={viewAttendees} />
            <Route path="/edit/:id" component={EditWorkshopProposals} />
            <Route path="/view/:id" component={editResearchPaperUpload} />
            <Route path="/attendee-view/:id" component={AllAttendeeDetails} />
            <Route path="/profile" component={editRevieweProfile} />
            <Route path="/configure/:id" component={ReviewedResearchPaperUpload} />
            <Route path="/confirm/:id" component={ConfirmApproveWorkshopProposals} />
            <Route path="/" component={Home} exact />
            <Route path="/create-post" component={CreatePost} />
            <Route path="/updatePost/:id" component={updatePosts} />
            <Route path="/profile-update/:id" component={editEditorProfile} />
          </Switch>
        </section>
        <Footer />
      </Router>
    </div>
  );
}

export default App;