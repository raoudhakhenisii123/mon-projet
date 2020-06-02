import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FacebookLoginButton } from "react-social-login-buttons"
import {Button, Form, FormGroup, label, Input} from 'react-bootstrap'
import { login, clearError } from '../actions/authActions'
import { setalert, removealert } from '../actions/Alertactions'
import { v4 as uuidv4 } from 'uuid';
import '../App.css';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            role: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        // if(nextProps.auth.error==='Please register before!' || nextProps.auth.error==='Wrong password')
        if (nextProps.auth.error) {
            let id = uuidv4()
            this.props.setalert(nextProps.auth.error, 'danger', id)
            setTimeout(() => {
                this.props.removealert(id)
                this.props.clearError()
            }, 5000);

        }
    }
    loginNow = e => {
        e.preventDefault()
        if (this.state.email === "" || this.state.password === "" || this.state.role === "") {
            // e.preventDefault()
            let id = uuidv4()
            this.props.setalert('Please enter your credentials before !', 'danger', id)
            setTimeout(() => {
                this.props.removealert(id)
                this.props.clearError()
            }, 5000)
        } else {

            this.props.login({
                email: this.state.email,
                password: this.state.password,
                role: this.state.role
            })
        }
    }
    render() {
        return (
            <form className="class_form">
                <h1 className="title_R">Login Page</h1>
                
                    <div className="text-center mb-6">
                      <span><img src="https://as1.ftcdn.net/jpg/03/15/54/58/500_F_315545872_7WZToH3Wl0R7oWYWkmzEyXmwv5W0bQ5Y.jpg"/> </span>
                   <h2>My Wedding</h2>
                    </div>
                    <FormGroup className='form-label-group'>
                        <label  for="Email" className="ph-area">Email</label>
                        <input className="class-input" name="email" type="text"  required="" onChange={this.handleChange}  placeholder="Email"/> <br />
                        </FormGroup>
                    <FormGroup   className='form-label-group'>
                        <label for="Password" className="ph-area">Password</label>
                        <input className="class-input" name="password" type="password"  required="" onChange={this.handleChange}  placeholder="Password"/>
                        </FormGroup>



                    <p>who are you:</p>
                    <FormGroup   className='form-label-group mb-3'>
                        <input type="checkbox" id="admin" name="role" onChange={this.handleChange} />
                        <label for="admin">ADMIN</label>
                        </FormGroup>
                        <FormGroup  className='form-label-group mb-3'>
                        <input type="checkbox" id="client" name="role" onChange={this.handleChange} />
                        <label for="client">client</label>
                        </FormGroup>


                    <div>
                        <button className="btn-lg btn-dark btn-block " onClick={ this.loginNow}>  Log in </button>
                    </div>
                    <div className="text-center  pt-3"> or continue with your social account</div>
                    <FacebookLoginButton className="mt-3 mb-3"/>
                    <div className="text-center"></div>
                    <a href="/sign up">Sign Up</a>
                    <span className="p-2">|</span>
                    <a href="/sign up">Forget Password</a>
                    <p class="mt-5 mb-3 text-muted text-center">© 2020-2021</p>
                </form>
          





        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { login, setalert, removealert, clearError })(Login);