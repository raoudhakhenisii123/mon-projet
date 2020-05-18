import React from 'react'
import { connect } from 'react-redux'
import { loadUser } from '../actions/authActions'
import ModalNavbar from './ModalNavbar'
import CarouselHome from './CarouselHome'
import TroopList from './TroopList'
import TroopForm from './TroopForm'
import DecorForm from './DecorFrom'
import CakeForm from './CakesForm'

class Home extends React.Component {
    componentWillMount() {
        this.props.loadUser()
    }
    render() {
        return (
            <div>
                <h1>Welcome to Dream's Night</h1>
                <div>
                    <ModalNavbar />
                </div>
                <div>
                    <TroopForm />
                </div>
                <div>
                    <CarouselHome />
                </div>
                <div>
                    <DecorForm />

                </div>
                <div>
                    <CakeForm/>
                </div> 

            </div>
        )
    }

}
export default connect(null, { loadUser })(Home)