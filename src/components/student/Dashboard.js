import React, { Component } from 'react'
import axios from 'axios';

export default class Dashboard extends Component {

  constructor (props) {
    super(props)

    this.state = {
      student: {
        docs: []
      }
    }
  }

  componentDidMount() {

    const sr = localStorage.getItem('studentRoll')

    const url = 'http://localhost:3000/student/' + sr;

    axios.get(url)
      .then((data) => this.setState({student: data.data}))
      .catch((err) => console.log(err))


  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-6 ">
              <h3 className="text-center">Your Details</h3>
              <div className="card" style={{width: '80%', margin: '0 auto'}}>
                <img className="card-img-top" style={{height: '400px'}} src={this.state.student.image} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{this.state.student.name}</h5>
                  <p className="card-text"><strong>Class:</strong> {this.state.student.clas}</p>
                  <p className="card-text"><strong>Enroll No:</strong> {this.state.student.rollno}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="text-center">Your Documents</h3>
              <div className="table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sl.No</th>
                      <th>Doc Name</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.student.docs.map((doc, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{doc.docname}</td>
                          <td><a href={doc.doc64} target="_blank">Download</a></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
