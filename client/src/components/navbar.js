import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../actions/authActions'



const Navbar=props=>{

    const userConnected=()=>(
    
        <ul className="row d-flex w-50">
            <li className="col-auto">
                Hello, { props.auth.user && props.auth.user.firstname + ' ' + props.auth.user.lastname }
            </li>
            {/* <li className="col"> <Link to="/">Home</Link></li>
         <li className="col"><Link to="/about"> About</Link></li> */}
         <li  className="col">
             <a href ="#!" onClick={props.logout}>
                 <i className="fas fa-sign-out-alt"></i>
                 Logout
             </a> </li>

        </ul>
       
    )
    const userdeConnected=()=>(
        <ul className="row d-flex w-25">
            <li className="col">
                <Link id="menu-item" to="/register"> Register</Link></li>
                <li className="col">
                <Link id="menu-item" to="/login"> Login</Link>

            </li>

        </ul>
    )

    return(
        <div>
         <h1>my menu</h1>
        
        {
            props.auth.isAuthenticated ? userConnected(): userdeConnected()
        }

        </div>
    )
}
const mapStateToProps=state=>{
    return{
        auth:state.auth
    }
}
export default connect(mapStateToProps, {logout} )(Navbar)