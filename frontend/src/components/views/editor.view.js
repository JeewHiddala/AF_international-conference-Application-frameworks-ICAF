import React, { Component} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

class viewEditors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editors: []
        }
        this.deleteEditor = this.deleteEditor.bind(this);

    }

    componentDidMount() {   //inbuild function
        axios.get('http://localhost:7000/editor/')
            .then(response => {
                this.setState({ editors: response.data.data });
            })
    }

    deleteEditor(e , editorId) {
        console.log("I am on Delete", editorId)
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
                axios.delete(`http://localhost:7000/editor/${editorId}`)
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
                    <div className="col-8"><h1>Editors</h1></div>
                    <div className="col-4"><button type="button" className="btn btn-outline-primary"><a href="/editorRegistration">Create Editor</a></button></div>
                </div>
                <div className = "row">
                    <div className="col-4"></div>
                    <div className="card col-4"><h6>Total Salary of Editors</h6></div>
                    <div className="card col-2"></div>
                </div>
                <br/>
                    <div className="container">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">NIC No</th>
                                <th scope="col">Address</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Recruited Administrator Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Editor Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.editors.length > 0 && this.state.editors.map((item, index) => (
                                <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.nicNo}</td>
                                <td>{item.address}</td>
                                <td>{item.mobileNumber}</td>
                                {item.admins.map((item,index)=>(
                                    <td>{item.name}</td>
                                ))}
                                <td>{item.userName}</td>
                                <td>{item.editorSalary}</td>
                                <td><button type="button" className="btn btn-outline-warning"  onClick={e => this.deleteProduct(e, item._id)} >Edit</button></td>
                                <td><button type="button" className="btn btn-outline-danger"  onClick={e => this.deleteEditor(e, item._id)} >Delete</button></td>
                                </tr>
                            ))}    
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}

export default viewEditors;