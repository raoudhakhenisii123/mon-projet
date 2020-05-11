import React, {Component} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux'
import {setalert,removealert } from '../actions/Alertactions'
import {register, clearError,loadUser} from '../actions/authActions'



class Register extends Component{
constructor(props){
super(props)
this.state={
    firstname:'',
    lastname:'',
    email:'',
    password:''
}
}
handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
}
registerNow=()=>{
    if(this.state.firstname===""||this.state.lastname===""||this.state.email===""||this.state.password===""){
        let id=uuidv4()
        this.props.setalert('All fields are required', 'danger', id)
        setTimeout(()=>{
            this.props.removealert(id)
         }, 5000);
    }else{
        this.props.register({
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            password:this.state.password
        })
    }
}
componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated){
        this.props.history.push('/')
    }
    if(nextProps.auth.error==='User already exists')
    {
        let id=uuidv4()
        this.props.setalert(nextProps.auth.error, 'danger', id)
        setTimeout(()=>{
            this.props.removealert(id)
            this.props.clearError()
         }, 5000);
    
    }
}
render(){
    
    return(
        <div>
        <h1>Register Page</h1>
        <form>
            <input name="firstname" type="text" onChange={this.handleChange} placeholder="enter please your name"/><br/>
            <input name="lastname" type="text" onChange={this.handleChange} placeholder="enter please your lastname"/><br/>
            <input name="email" type="text" onChange={this.handleChange} placeholder="enter please your email"/><br/>
            <input name="password" type="password" onChange={this.handleChange} placeholder="enter please your password"/>
        </form>
        <button btn btn-info onClick={this.registerNow}> Register</button>
        </div>




    )
}
}

const mapDispatchToProps=dispatch=>{
    return{
        setalert:(msg,type,id)=>dispatch(setalert(msg,type,id)),
        removealert:id=>dispatch(removealert(id))
    }
}
const mapStateToProps=state=>{
    return{
        auth:state.auth
    }
}
export default connect (mapStateToProps, {setalert, removealert,register,clearError,loadUser}) (Register);