import React  from 'react'
import {connect} from 'react-redux'
import TroopItem from './Troopitem'
import {getTroops} from '../actions/troopsActions'

class TroopList extends React.Component{

componentDidMount(){
    this.props.getTroops()
}

render (){
    return(
        <div>
            {
                this.props.troops.length===0 ? (
                <h4>Your list Troops id empty</h4>
                ): (
                    this.props.troops.troop.map(troop => <TroopItem troop={troop}/>))
            }

        </div>
    )

  }  
    
}
const mapStateToProps = state =>{
    return{
        troops:state.troop
    }    
}
export default connect(mapStateToProps, {getTroops}) (TroopList)