import React from 'react'
import { connect } from 'react-redux'
import {deleteDecors, saveDecors } from '../actions/decorsActions'

const DecorsItem = ({decor, saveDecors, deleteDecors}) => {
    return (
        <div>
            <h1>
                {decor.nom}
            </h1>
            <img src={decor.lienimg} />
            <h2>{decor.thèmes}</h2>
            <div className="btns">
                <button className="btn btn-info" onClick={() => saveDecors(decor) }>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteDecors(decor._id) }>Delete</button>
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