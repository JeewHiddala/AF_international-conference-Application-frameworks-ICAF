import React, { Component } from 'react';
//import axios from 'axios';


class AttendeeDashboard extends Component {
    constructor(props) {
        super(props);
        this.loadUpdateProfile = this.loadUpdateProfile.bind(this);
        this.loadAttendeePayment = this.loadAttendeePayment.bind(this);
        this.loadLogin = this.loadLogin.bind(this);
        this.logout = this.logout.bind(this);
    }

    loadUpdateProfile(e, userId) {
        this.props.history.push({
            pathname: `/attendee/${userId}`,
            data: `${userId}`
        })
    }
    loadAttendeePayment(e, userId) {
        this.props.history.push({
            pathname: '/attendee/pay/store',
            data: `${userId}`
        })
    }
    loadLogin(e) {
        window.location = '/login'
    }
    logout(e) {
        window.location = '/'
    }
    render() {
        const { data } = this.props.location
        console.log("userid: " + data);
        if (data) {
            return (
                <div className="container">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="button" className="btn btn-primary me-md-2" onClick={e => this.logout(e)} >Logout</button>
                    </div>
                    <h2>Attendee Dashboard</h2>
                    <br /><br /><br /><br />
                    <button type="button" className="btn btn-primary me-md-2" onClick={e => this.loadUpdateProfile(e, data)} >Update Profile</button>
                    
                    <button type="button" className="btn btn-primary me-md-2" onClick={e => this.loadAttendeePayment(e, data)} >Make Payment</button>
                    <br /><br /><br /><br />

                </div>
            )
        } else {
            return (
                <div className="container">
                    <h2>Please login to continue</h2>
                    <br /><br /><br /><br />
                    <button type="button" className="btn btn-primary" onClick={e => this.loadLogin(e)} >Login</button>
                    <br /><br /><br /><br />
                </div>
            )
        }
    }
}

export default AttendeeDashboard;