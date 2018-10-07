import React, { Component } from 'react'

export default class Login extends Component {

    constructor (props) {
        super(props)


        this.state = {
            email: '',
            password: '',
            showEmailError: false,
            showPasswordError: false,
            authError: false
        }

        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.login = this.login.bind(this)
    }

    changeEmail = (event) => {
        this.setState({showEmailError: false})
        this.setState({email: event.target.value})

    }

    changePassword = (event) => {
        this.setState({showPasswordError: false})
        this.setState({password: event.target.value})
    }

    login = () => {

        if (this.state.email == '') {
            this.setState({showEmailError: true})
        } 

        if (this.state.password == '') {
            this.setState({showPasswordError: true})
        }

        if (this.state.email == '' || this.state.password == '') {
            return
        }

        let student = {
            rollno: this.state.email,
            password: this.state.password
        }

        // console.log(student)

        // student login here
        fetch('http://localhost:3000/student/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.error) {
                    this.setState({authError: true})
                } else {
                    localStorage.setItem('studenttoken', data.token)
                    this.props.history.push('/student/dashboard')
                    this.setState({authError: false})
                }
            })
            .catch((error) => {
            console.log(error)
            })

    }

    render() {

        const styles = {
            container : {
                border: '1px solid #ccc',
                padding: '20px 60px 20px 60px',
                margin: '10% 30% 0% 30%',
                boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'
            }
        }

        return (
        <div className="container text-center">
            <div style={styles.container}>
                <h1>Student Login</h1>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputEmail1">Roll Number </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Roll Number" value={this.state.email} onChange={this.changeEmail}/>
                        {this.state.showEmailError ? <p className="text-danger">Roll Number required</p> : null }
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" 
                        placeholder="Password" value={this.state.password} onChange={this.changePassword}/>
                        {this.state.showPasswordError ? <p className="text-danger">Password required</p> : null}
                    </div>
                    {this.state.authError ? 
                    <p className="text-warning">Authentication Failed</p> : null }
                    <button type="submit" className="btn btn-primary" onClick={this.login}>Login</button>
            </div>
        </div>
        )
    }
}