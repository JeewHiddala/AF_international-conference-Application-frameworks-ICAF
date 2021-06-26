import React, { Component} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

class viewAdmins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admins: []
        }
        this.deleteAdmin = this.deleteAdmin.bind(this);

    }

    componentDidMount() {   //inbuild function
        axios.get('http://localhost:7000/admin/')
            .then(response => {
                this.setState({ admins: response.data.data });
            })
    }

    deleteAdmin(e , adminId) {
        console.log("I am on Delete", adminId)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:7000/admin/${adminId}`)
                Swal.fire(
                    'Deleted!',
                    'Product has been deleted.',
                    'success'
                )
            }
        })
    }

    render() {
        return (
            <div className="container">
                <br/>
                <div className = "row">
                    <div className="col-8"><h1>Administrators</h1></div>
                    <div className="col-4"><button type="button" className="btn btn-outline-primary">Create Administrator</button></div>
                </div>
                <div className = "row">
                    <div className="col-4"></div>
                    <div className="card col-4"><h6>Total Salary of Administrators</h6></div>
                    <div className="card col-2"></div>
                </div>
                <br/>
                    <div className="container">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Date of Birth</th>
                                <th scope="col">Address</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Username</th>
                                <th scope="col">Admin Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.admins.length > 0 && this.state.admins.map((item, index) => (
                                <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.dateOfBirth}</td>
                                <td>{item.address}</td>
                                <td>{item.mobileNumber}</td>
                                <td>{item.userName}</td>
                                <td>{item.salary}</td>
                                <td><button type="button" className="btn btn-outline-warning"  onClick={e => this.deleteProduct(e, item._id)} >Edit</button></td>
                                <td><button type="button" className="btn btn-outline-danger"  onClick={e => this.deleteAdmin(e, item._id)} >Delete</button></td>
                                </tr>
                            ))}    
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}

export default viewAdmins;