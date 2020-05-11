import React from 'react'
import {connect} from 'react-redux'
import {loadUser} from '../actions/authActions'
import  ModalNavbar from './ModalNavbar'
import CarouselHome from './CarouselHome'
import TroopList from './TroopList'
import TroopForm from './TroopForm'

class Home extends React.Component{
    componentDidMount (){
        this.props.loadUser()
    }
    render()  {
        return(
            <div>
                <h1>Welcome to Dream's Night</h1>
                <div>
                <ModalNavbar/>
                </div>
                <div>
                    <TroopForm/>
                </div>
                <div>
                    <CarouselHome/>
               </div>
               <div>
                   <TroopList/>

               </div>
    
            </div>
        )
    }
    
}
export default connect( null, {loadUser})(Home)