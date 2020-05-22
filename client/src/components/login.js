import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, clearError } from '../actions/authActions'
import { setalert, removealert } from '../actions/Alertactions'
import { v4 as uuidv4 } from 'uuid';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
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
loginNow = (e) => {

       
        if(this.state.email === ""|| this.state.password === "") {
            e.preventDefault()
            let id = uuidv4()
            this.props.setalert('Please enter your credentials before !', 'danger', id)
            setTimeout(() => {
                this.props.removealert(id)
                this.props.clearError()
            }, 5000)
        } else {
           
            this.props.login({
                email: this.state.email,
                password: this.state.password
            })
        }
    }
    render() {
        return (
            <div>
                <h1 className="title_R">Login Page</h1>
                <form className="class_form">
                    <div>
                        <input  className="class-input" name="email" type="text" onChange={this.handleChange} placeholder="enter please your email" /><br />
                        </div>
                        <div>
                     <input  className="class-input"  name="password" type="password" onChange={this.handleChange} placeholder="enter please your password" />
                     </div>
                
                {/* <div> */}
                    <button  className="btn btn-info " onClick={(e)=>this.loginNow(e.preventDefault())}>  login </button>
                    {/* </div> */}
                </form>
            </div>

          



        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { login, setalert, removealert, clearError })(Login);