import React from 'react'
import { connect } from 'react-redux'
import { deleteTroops, saveTroops } from '../actions/troopsActions'

const TroopItem = ({ troop, saveTroops, deleteTroops }) => {
    return (
        <div>
            <h1>
                {troop.nom}
            </h1>
            <img src={troop.lienimg} />
            <h2>{troop.thèmes}</h2>
            <div className="btns">
                <button className="btn btn-info" onClick={() => saveTroops(troop) }>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteTroops(troop._id) }>Delete</button>
            </div>

        </div>
    )
}
// const mapDispatchToProps=dispatch=>{
//     return {
//         remove:id=>dispatch(deleteTroops(id)),
//         setcurrent:troop=> dispatch(saveTroops(troop))
//     }
// }

export default connect(null, { deleteTroops, saveTroops })(TroopItem)