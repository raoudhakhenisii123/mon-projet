import React from 'react'
import { connect } from 'react-redux'
import {deleteDecors, saveDecors } from '../actions/decorsActions'

const DecorsItem = ({ decors, saveDecors, deleteDecors}) => {
    return (
        <div>
            <h1>
                {decors.nom}
            </h1>
            <img src={decors.lienimg} />
            <h2>{decors.thèmes}</h2>
            <div className="btns">
                <button className="btn btn-info" onClick={() => saveDecors(decors) }>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteDecors(decors._id) }>Delete</button>
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

export default connect(null, {deleteDecors, saveDecors })(DecorsItem)