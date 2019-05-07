import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            addstudent: {
                name: '',
                clas: '',
                rollno: '',
                image: ''
            },
            studentList: [],
            loader: true,
            currentStudent: {},
            filename: '',
            addStudentSuccess: false,
            addStudentDocumentSuccess: false
        }
    }

    componentDidMount() {
        this.getAllStudent()
    }

    getAllStudent = () => {
        fetch('http://localhost:3000/admin/getstudents', {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ studentList: data }, () => {
                    this.setState({ loader: false })
                    this.setState({ currentStudent: data[0] })
                })
            })
            .catch((error) => console.log(error))
    }

    styles = {
        studentRow: {
            border: '1px solid #cccccc'
        }
    }


    // add student

    changeName = (event) => {
        let student = { ...this.state.addstudent }
        student.name = event.target.value

        this.setState({ addstudent: student })
    }

    changeClas = (event) => {
        let student = { ...this.state.addstudent }
        student.clas = event.target.value
        this.setState({ addstudent: student })
    }

    changeRollNo = (event) => {
        let student = { ...this.state.addstudent }
        student.rollno = event.target.value
        this.setState({ addstudent: student })
    }

    changeImage = (event) => {
        let file = event.target.files[0]
        let document = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            document = reader.result;
            let student = { ...this.state.addstudent }
            student.image = document

            this.setState({ addstudent: student }, () => {
                console.log('image saved')
            })

        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    // main method
    addstudent = () => {

        this.setState({ loader: true })

        const student = {
            name: this.state.addstudent.name,
            clas: this.state.addstudent.clas,
            rollno: this.state.addstudent.rollno,
            image: this.state.addstudent.image
        }

        fetch('http://localhost:3000/admin/addstudent', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('find all students')
                this.getAllStudent()

                let addstudent = {
                    name: '',
                    clas: '',
                    rollno: '',
                    image: ''
                }
                this.setState({ addstudent: addstudent })
                $('#closeAddStudentModal').click();
            })
            .catch((error) => {
                console.log(error)
                this.setState({ loader: false })
            })
    }
    // end add student

    changeCurrentStudent(index) {
        let getStudent = this.state.studentList[index]
        this.setState({ currentStudent: getStudent })
    }

    changeDocument = (event) => {
        let file = event.target.files[0]
        let document = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            document = reader.result;

            this.setState({ document: document }, () => {
                console.log('document saved')
            })

        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }


    uploadDocument = () => {
        let data = {
            docname: this.state.filename,
            documentData: this.state.document,
            rollno: this.state.currentStudent.rollno
        }

        axios.post('http://localhost:3000/admin/upload', data)
            .then((res) => $('#uploadDocumentClose').click())
            .catch((error) => console.log(error))
    }

    changeFileName = (event) => {
        this.setState({ filename: event.target.value })
    }

    deleteCurrentStudent = (rollno) => {
        const studentRoll = rollno
        this.setState({ loader: true })
        axios.delete(`http://localhost:3000/student/${studentRoll}`)
        .then((response) => {
            console.log(response.data)
            this.getAllStudent()
        })
        .catch((error) => {
            console.log(error.response)
            this.setState({ loader: false })
        })

    }

    render() {
        return (
            <div>
                {this.state.loader ?
                    <div className="loader loader-default is-active" data-text="Please Wait..." data-blink
                        id="registrationLoader">
                    </div> : null}
                <div className="container pt-3">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <h3>Student List</h3>
                            <div className="table-responsive mt-5">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Enroll No.</th>
                                            <th className="text-left">Name</th>
                                            <th>Detail</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.studentList.map((std, index) => {
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{std.rollno}</td>
                                                    <td className="text-left">{std.name}</td>
                                                    <td><a href="javascript:;" onClick={this.changeCurrentStudent.bind(this, index)}>view</a></td>
                                                    <td><a href="javascript:;" onClick={this.deleteCurrentStudent.bind(this, std.rollno)}>delete</a></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <button className="btn btn-danger mt-5" data-toggle="modal" data-target="#myModal">Add Student</button>
                        </div>
                        <div className="col-md-6 text-center">
                            <h3>Student Detail</h3>
                            {this.state.currentStudent ?
                                <div className="row mt-5">

                                    <div className="col-md-6">
                                        <img className="img img-responsive img-thumbnail" src={this.state.currentStudent.image} height="200px"></img>
                                    </div>
                                    <div className="col-md-6 text-left">
                                        <p><strong>Name:</strong> {this.state.currentStudent.name}</p>
                                        <p><strong>Class:</strong>{this.state.currentStudent.clas}</p>
                                        <p><strong>Enroll No:</strong> {this.state.currentStudent.rollno}</p>
                                        <p><strong>Docs Issued:</strong> True</p>
                                        <p><strong>Password:</strong> {this.state.currentStudent.password}</p>
                                        <p className="mt-5"><button className="btn btn-info" data-toggle="modal" data-target="#addDocModal">Upload Document</button></p>
                                    </div>
                                </div>
                                : <p>No Student Available</p>}
                        </div>
                    </div>
                </div>

                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Student</h4>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <form>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputEmail1">Name</label>
                                            <input type="text" className="form-control" aria-describedby="emailHelp"
                                                placeholder="Name" onChange={this.changeName} value={this.state.addstudent.name} />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputPassword1">Class</label>
                                            <input type="text" className="form-control" placeholder="Class" onChange={this.changeClas} value={this.state.addstudent.clas} />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputPassword1">Enroll Number</label>
                                            <input type="text" className="form-control" placeholder="Enroll Number" onChange={this.changeRollNo} value={this.state.addstudent.rollno} />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputPassword1">Image</label>
                                            <br />
                                            <input type="file" onChange={this.changeImage} />
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info" onClick={this.addstudent}>Save</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal" id="closeAddStudentModal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal for document */}
                <div className="modal" id="addDocModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Upload Document</h4>
                            </div>
                            <div className="modal-body">
                                <div className="container">

                                    <div className="form-group text-left">
                                        <label>File Name</label>
                                        <input type="text" onChange={this.changeFileName} value={this.state.filename} />
                                        <label htmlFor="exampleInputPassword1">File</label>
                                        <br />
                                        <input type="file" onChange={this.changeDocument} />
                                    </div>

                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info" onClick={this.uploadDocument}>Save</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal" id="uploadDocumentClose">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
