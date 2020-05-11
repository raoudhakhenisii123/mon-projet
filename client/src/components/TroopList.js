import React from 'react'
import {connect} from 'react-redux'
import TroopItem from './Troopitem'

const TroopList=props=>{
    return(
        <div>
            {
                props.troops.troop.map(troop => <TroopItem troop={troop}/>)
            }

        </div>
    )
}
const mapStateToProps = state =>{
    return{
        troops:state.troop
    }    
}
export default connect(mapStateToProps) (TroopList)