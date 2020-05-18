import React from 'react'
import { connect } from 'react-redux'
import {deletecakes, savecakes } from '../actions/cakesActions'

const CakesItem = ({ cakes, deletecakes, savecakes }) => {
    return (
        <div>
            <h1>
                {cakes.nom}
            </h1>
            <img src={cakes.lienimg} />
            <h2>{cakes.type}</h2>
            <h3>{cakes.quantité}</h3>
            <div className="btns">
                <button className="btn btn-info" onClick={() =>savecakes(cakes) }>Edit</button>
                <button className="btn btn-danger" onClick={() => deletecakes(cakes._id) }>Delete</button>
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

export default connect(null, {deletecakes, savecakes })(CakesItem)