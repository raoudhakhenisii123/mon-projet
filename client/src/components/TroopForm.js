import React, { Component } from 'react'
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import {addTroops, editTroops, clearTroops} from '../actions/troopsActions'

class TroopForm extends  Component {
    constructor(props) {
        super(props)
        this.state = {
            nom: "",
            lienImg: "",
            thèmes: ""

        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <from>
                <div>
                    <label>  Name: </label>
                    <input name="nom" type="text" onChange={this.handleChange} value={this.state.nom}/>
                </div>
                <div>
                    <label> lienImg:</label>
                    <input name="lienImg" type="text" onChange={this.handleChange}  value={this.state.lienImg}/>
                </div>
                <div>
                    <label> Theme:</label>
                    <input name="thèmes" type="text" onChange={this.handleChange} value={this.state.thèmes} />
                </div>
                <div>
                    <button className="btn-warning" onClick={e=>
                        {e.preventDefault() 
                        if(this.props.save){
                            this.props. UpdatedTroops(this.state)
                            this.props.clear()
                        }
                        else {
                        this.props.addnewTroop({...this.state, id:uuidv4()})}
                   this.setState({nom: "", lienImg: "", thèmes: ""}) }}> 
                   {this.props.save ? 'EDIT' : 'ADD'} </button>
                </div>
            </from>

        )
    }

}
const mapDispatchToProps=dispatch=>{
    return {
        addnewTroop:troop => dispatch(addTroops(troop)),
        UpdatedTroops:troop => dispatch(editTroops(troop)),
        clear:() => dispatch (clearTroops())
    }
}
const mapStateToProps=state=>{
    return{
        save:state.troop.saved
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (TroopForm)