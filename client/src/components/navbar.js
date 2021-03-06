import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { remove_cuurent_troop } from '../actions/troopsActions'
import { logout } from '../actions/authActions'
import { Nav } from 'react-bootstrap'
import TroopList from './TroopList'
import DecorList from './DecorsList'
import CakesList from './CakesList'
import CakeForm from './CakesForm'
import DecorForm from './DecorFrom'
import TroopForm from './TroopForm'



const Navbar = props => {

    const logMeOut = () => {
        props.logout()
        props.remove_cuurent_troop()
    }
    // const userConnected = () => (
    //     <div>

    //         <ul className="row d-flex w-50">
    //             <li className="col-auto">
    //                 Hello, {props.auth.user && props.auth.user.firstname + ' ' + props.auth.user.lastname}
    //             </li>
    //             <li className="col">
    //                 <a href="#!" onClick={logMeOut}>
    //                     <i className="fas fa-sign-out-alt"></i>Logout
    //                 </a>
    //             </li>
    //         </ul>
    //     </div>

    // )
    const userdeConnected = () => (
        <ul className="row d-flex w-25">
            <div>
                <button className="button_login">
                    <Link id="menu-item" to="/register"> Register</Link>
                </button>
            </div>
            <div>
                <button className="button_login" >
                    <Link id="menu-item" to="/login"> Login</Link>
                </button>
            </div>
        </ul>
    )
    const PageAdmin = () => (
        <div>
            <div>

                <ul className="row d-flex w-50">
                    <li className="col-auto">
                        Hello, {props.auth.user && props.auth.user.firstname + ' ' + props.auth.user.lastname}
                    </li>
                    <li className="col">
                        <a href="#!" onClick={logMeOut}>
                            <i className="fas fa-sign-out-alt"></i>Logout
        </a>
                    </li>
                </ul>
            </div>
            <Nav>
                <Nav.Item>
                    <Link to="/Cakes">CAKES</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/decors">DECORS</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/troop">TROOPS</Link>
                </Nav.Item>
            </Nav>
        </div>
    )
    const PageClient = () => (
        <div>
            <div>

                <ul className="row d-flex w-50">
                    <li className="col-auto">
                        Hello, {props.auth.user && props.auth.user.firstname + ' ' + props.auth.user.lastname}
                    </li>
                    <li className="col">
                        <a href="#!" onClick={logMeOut}>
                            <i className="fas fa-sign-out-alt"></i>Logout
        </a>
                    </li>
                </ul>
            </div>
            <Nav>
                <Nav.Item>
                    <Link to="/Troops">All troops</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/Decoration">Decors</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/cakes">Cakes</Link>
                </Nav.Item>
            </Nav>
        </div>
    )
    // const handle = () => {

    //     (props.auth.user) ?
    //         (props.auth.user.role === 'admin' ? PageAdmin() : PageClient())
    //         : (userdeConnected())

    // }
    return (<div>

        <Nav variant="tabs" defaultActiveKey="/home" className="nav-menu">
            <Nav.Item className='logo'>
                {/* <Nav.Link eventKey="link-1">Option 2</Nav.Link> */}
                <img src="https://image.flaticon.com/icons/svg/2526/2526192.svg " width="150" />
            </Nav.Item>
            <Nav.Item>
                {/* <Nav.Link href="/home">Active</Nav.Link> */}
                <h1 className="title_R">Dream's Night</h1>
            </Nav.Item>
            {(props.auth.user) ?
                (props.auth.user.role === 'admin' ? PageAdmin() : PageClient())
                : (userdeConnected())}


        </Nav>
    </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { logout, remove_cuurent_troop })(Navbar)