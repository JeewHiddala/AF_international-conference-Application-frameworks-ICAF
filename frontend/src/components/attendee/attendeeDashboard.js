import React, { Component } from 'react';
import axios from 'axios';


class AttendeeDashboard extends Component {
    constructor(props) {
        super(props);
        this.loadUpdateProfile = this.loadUpdateProfile.bind(this);

    }

    loadUpdateProfile(e, userId) {
        window.location = `/attendee/${userId}`
    }
    render() {
        const { data } = this.props.location

        console.log("userid: "+data);
        return (
            <div className="container">
                <h2>Attendee Dashboard</h2>
                <br /><br /><br /><br />
                <button type="button" className="btn btn-primary" onClick={e => this.loadUpdateProfile(e, data)} >Update Profile</button>
                <br /><br /><br /><br />
            </div>
        )
    }
}

export default AttendeeDashboard;