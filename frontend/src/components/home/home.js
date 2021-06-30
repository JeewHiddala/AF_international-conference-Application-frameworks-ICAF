import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.loadLogin = this.loadLogin.bind(this);
    }

    loadLogin(e) {
        window.location = '/login'
    }

    render() {
        return (
            <div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" className="btn btn-primary me-md-2" onClick={e => this.loadLogin(e)} >Login</button>
                </div>
                <h1>International Conference Application Framework</h1>
                <br />
                
                <br />
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Register as an Attendee</h5>
                                <p className="card-text">Join with us for our research paper sessions and workshops</p>
                                <a href="/attendee/create" className="btn btn-primary">Register</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Register as a Presenter</h5>
                                <p className="card-text">Join with us to share your knowledge as a researcher or a workshop conductor</p>
                                <a href="/presenter/create" className="btn btn-primary">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;