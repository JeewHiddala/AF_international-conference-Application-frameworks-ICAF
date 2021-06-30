import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';    //make routes
import Navbar from './components/navBar/navBar';
import ViewEditors from './components/views/editor.view';
import ViewReviewers from './components/views/reviewer.view';
import ViewAdmins from './components/views/admin.view';
import AdminRegistration from './components/registrationViews/admin.registrationView';
import EditorRegistration from './components/registrationViews/editor.registrationView';
import ReviewerRegistration from './components/registrationViews/reviewer.registrationView';
import UpdateAdmin from './components/updateViews/admin.updateView';
import UpdateEditor from './components/updateViews/editor.updateView';
import UpdateReviewer from './components/updateViews/reviewer.updateViews';
import AdminSubcategories from './components/subCategorizedViews/administrational.subCategory';
import NonAdminSubcategories from './components/subCategorizedViews/nonAdministrational.subCategory';
import AdminDashboard from './components/dashboards/admin.dashboard';
import OtherFacilities from './components/subCategorizedViews/otherFacilities.subCategorized';
import PostAdminView from './components/views/postAdminApproval.view';
import ApprovePostByAdmin from './components/approvalViews/approvePost.approvalViews';
import Footer from './components/footer/footer';
import postAdminView from './components/views/post.view';


function App(){
    return(
        <div>
            <Router>
                <Navbar/>
                    <section>
                        <Switch>
                            <Route path="/adminSubcategories" component={AdminSubcategories} />
                            <Route path="/nonAdminSubcategories" component={NonAdminSubcategories} />
                            <Route path="/adminDashboard" component={AdminDashboard} />
                            <Route path="/otherFacilities" component={OtherFacilities} />
                            <Route path="/editor" component={ViewEditors} />
                            <Route path="/reviewer" component={ViewReviewers} />
                            <Route path="/admin" component={ViewAdmins} />
                            <Route path="/adminRegistration" component={AdminRegistration} />
                            <Route path="/editorRegistration" component={EditorRegistration} />
                            <Route path="/reviewerRegistration" component={ReviewerRegistration} />
                            <Route path="/updateAdmin/:id" component={UpdateAdmin} />
                            <Route path="/updateEditor/:id" component={UpdateEditor} />
                            <Route path="/updateReviewer/:id" component={UpdateReviewer} />
                            <Route path="/postadminview" component={PostAdminView} />
                            <Route path="/approvepost/:id" component={ApprovePostByAdmin} />
                            <Route path="/postAdView" component={postAdminView} />


                        </Switch>
                    </section>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;