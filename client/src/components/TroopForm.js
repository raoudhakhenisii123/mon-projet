import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { v4 as uuidv4 } from 'uuid';
import { addTroops, editTroops, clearTroops } from '../actions/troopsActions'

class TroopForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nom: "",
            lienimg: "",
            thèmes: ""

        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <form>
                <div>
                    <label>  Name: </label>
                    <input name="nom" type="text" onChange={this.handleChange} value={this.state.nom} />
                </div>
                <div>
                    <label> lienImg:</label>
                    <input name="lienimg" type="text" onChange={this.handleChange} value={this.state.lienimg} />
                </div>
                <div>
                    <label> Theme:</label>
                    <input name="thèmes" type="text" onChange={this.handleChange} value={this.state.thèmes} />
                </div>
                <div>
                    <button className="btn-warning" onClick={e => {
                        e.preventDefault()
                        if (this.props.save) {
                            this.props.editTroops(this.state)
                            this.props.clearTroops()
                        }
                        else {
                            this.props.addTroops(this.state)
                        }
                        this.setState({ nom: "", lienimg: "", thèmes: "" })
                    }}>
                        {this.props.save ? 'EDIT TROOP' : 'ADD TROOP'} </button>
                </div>
            </form>

        )
    }

}
const mapStateToProps = state => {
    return {
        save: state.troop.saved
    }
}
export default connect(mapStateToProps, { addTroops, editTroops, clearTroops })(TroopForm)