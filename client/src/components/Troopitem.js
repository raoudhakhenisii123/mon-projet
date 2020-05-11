import React from 'react'
import {connect} from 'react-redux'
import {deleteTroops,saveTroops } from '../actions/troopsActions'
const TroopItem =props=>{
    return(
        <div>
            <h1>
                {props.troop.nom}
            </h1>
            <img src={props.troop.lienimg}/>
            <h2>{props.troop.thèmes}</h2>
            <div className="btns">
            <button className="btn btn-info" onClick={ ()=>{props.setcurrent(props.troop.troop)}}>Edit</button>
            <button className="btn btn-danger" onClick={()=>{props.remove(props.troop.id)}}>Delete</button>
            </div>

        </div>
    )
}
const mapDispatchToProps=dispatch=>{
    return {
        remove:id=>dispatch(deleteTroops(id)),
        setcurrent:troop=> dispatch(saveTroops(troop))
    }
}

export default  connect(null, mapDispatchToProps) (TroopItem)