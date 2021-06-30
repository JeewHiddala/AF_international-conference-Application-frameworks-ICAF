import React, { Component } from 'react';       //import react and react components

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {   //use to return things when call navbar component.
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">International Conference Application</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabIndex="-1"
                                       aria-disabled="true">Disabled</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/adminDashboard">Administrator Dashboards</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;