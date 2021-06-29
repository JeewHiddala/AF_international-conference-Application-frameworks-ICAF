import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:7000/post/')
      .then(response => {
        this.setState({ posts: response.data.data });
      })
  }

  navigateEditPostPage(e, postId) {
    window.location = `/updatePost/${postId}`
}

  render() {
    return (
      <div className="container">
        <h1>Posts</h1>
        <div className="col-4"><button type="button" className="btn btn-outline-primary"><a href="/create-post">Create Post</a></button></div>

        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Submitted Date</th>
                <th scope="col">Status</th>
                <th scope="col">Approved Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.length > 0 && this.state.posts.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.submittedDate}</td>
                  <td>{item.status}</td>
                  <td>{item.approvedDate}</td>
                  {item.editors.map((item,index)=>(
                                    <td>{item.name}</td>
                              )
                              )
    }
                  <td><button type="button" className="btn btn-outline-warning" onClick={e => this.EditPostPage(e, item._id)} >Edit</button></td>
                  <td><button type="button" className="btn btn-outline-danger" onClick={e => this.deletePost(e, item._id)} >Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>


    )
  }
}
export default Posts;