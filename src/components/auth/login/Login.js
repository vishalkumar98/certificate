import React, { Component } from 'react'

export default class Login extends Component {

    constructor (props) {
        super(props)


        this.state = {
            email: '',
            password: '',
            showEmailError: false,
            showPasswordError: false
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

        console.log(this.state)
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
                <h1>Login</h1>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter email" value={this.state.email} onChange={this.changeEmail}/>
                        {this.state.showEmailError ? <p className="text-danger">Email required</p> : null }
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" 
                        placeholder="Password" value={this.state.password} onChange={this.changePassword}/>
                        {this.state.showPasswordError ? <p className="text-danger">Password required</p> : null}
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.login}>Login</button>
            </div>
        </div>
        )
    }
}