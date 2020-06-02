import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux'
import { FacebookLoginButton } from "react-social-login-buttons"
import { Button, Form, FormGroup, label, Input } from 'react-bootstrap'
import { setalert, removealert } from '../actions/Alertactions'
import { register, clearError, loadUser } from '../actions/authActions'
// import SignUp from './sign'
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
//



class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            role: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    registerNow = () => {
        if (this.state.firstname === "" || this.state.lastname === "" || this.state.email === "" || this.state.password === "" || this.state.role === "") {
            let id = uuidv4()
            this.props.setalert('All fields are required', 'danger', id)
            setTimeout(() => {
                this.props.removealert(id)
            }, 5000);
        } else {
            this.props.register({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
                role: this.state.role
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.auth.error === 'User already exists') {
            let id = uuidv4()
            this.props.setalert(nextProps.auth.error, 'danger', id)
            setTimeout(() => {
                this.props.removealert(id)
                this.props.clearError()
            }, 5000);

        }
    }
    render() {

        return (
            <form className="class_form">
                <h1 className="title_R">Register Page</h1>

                <div className="text-center mb-6">
                    <span><img src="https://as1.ftcdn.net/jpg/03/15/54/58/500_F_315545872_7WZToH3Wl0R7oWYWkmzEyXmwv5W0bQ5Y.jpg" /> </span>
                    <h2>My Wedding</h2>
                </div>
                <FormGroup className='form-label-group'>
                <label  for="FirstName" className="ph-area">FirstName</label>
                <input className="class-input" name="firstname" type="text" onChange={this.handleChange}  /><br />
                </FormGroup>
                <FormGroup className='form-label-group'>
                <label  for="lastname" className="ph-area">LastName</label>
                <input className="class-input" name="lastname" type="text" onChange={this.handleChange}  /><br />
                </FormGroup>
                <FormGroup className='form-label-group'>
                <label  for="email" className="ph-area">Your email</label>
                <input className="class-input" name="email" type="text" onChange={this.handleChange}  /><br />
                </FormGroup>
                <FormGroup className='form-label-group'>
                <label  for="Password" className="ph-area">Password</label>
                <input className="class-input" name="password" type="password" onChange={this.handleChange}  />
                </FormGroup>
                <p>who are you:</p>
                <div>
                    <input type="radio" id="admin" name="role" value="admin" onChange={this.handleChange} />
                    <label for="admin" >ADMIN</label>
                </div>
                <div>
                    <input type="radio" id="client" name="role" value="client" onChange={this.handleChange} />
                    <label for="client" >client</label>
                </div>
                <button className="btn btn-info button-form" onClick={this.registerNow}> Register</button>
                <div className="text-center  pt-3"> or continue with your social account</div>
                <FacebookLoginButton className="mt-3 mb-3" />
                <div className="text-center"></div>
                <a href="/sign up">Sign Up</a>
                <span className="p-2">|</span>
                <a href="/sign up">Forget Password</a>
                <p class="mt-5 mb-3 text-muted text-center">© 2020-2021</p>
            </form>








        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setalert: (msg, type, id) => dispatch(setalert(msg, type, id)),
        removealert: id => dispatch(removealert(id))
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { setalert, removealert, register, clearError, loadUser })(Register);