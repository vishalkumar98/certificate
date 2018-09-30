import React, { Component } from 'react'

export default class Login extends Component {



render() {

    const styles = {
        container : {
            border: '1px solid #ccc',
            padding: '20px 60px 20px 60px',
            margin: '10% 30% 0% 30%'
        }
    }

    return (
      <div className="container text-center">
        <div style={styles.container}>
            <h1>Login</h1>
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email" />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
      </div>
    )
  }
}