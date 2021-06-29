import React, { Component } from 'react';
import axios from 'axios';

const initialState = {
    title: '',
    description: '',
    submittedDate: '',
    status: 'pending',
    approvedDate: ''
}

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let post = {
            title: this.state.title,
            description: this.state.description,
            submittedDate: this.state.submittedDate,
            status: this.state.status,
            approvedDate: this.state.approvedDate
        }

        console.log('DATA TO SEND', post);
        axios.post('http://localhost:7000/post/create', post)
            .then(response => {
                alert('Data successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }


    render() {
        return (
            <div className="container">
                <h2>Create Post</h2>
                <form onSubmit={this.onSubmit}>
                    <div class="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}
                        />

                    </div>
                    <div class="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                        >
                        </textarea>

                    </div>
                    <div class="mb-3">
                        <label htmlFor="submittedDate" className="form-label">Submitted Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="submittedDate"
                            name="submittedDate"
                            value={this.state.submittedDate}
                            onChange={this.onChange}

                        />

                    </div>
                    <div class="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <input
                            type="text"
                            className="form-control"
                            id="status"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                            readonly
                        />
                    </div>

                        <div class="mb-3">
                            <label htmlFor="approvedDate" className="form-label">Approved Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="approvedDate"
                                name="approvedDate"
                                value={this.state.approvedDate}
                                onChange={this.onChange}
                                readonly
                            />
                        </div>

                        <br></br>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreatePost;