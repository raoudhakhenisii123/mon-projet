import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { v4 as uuidv4 } from 'uuid';
import { addcakes, editcakes, clearCakes } from '../actions/cakesActions'

class CakeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nom: "",
            lienimg: "",
            type: "",
            quantité: ""

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
                    <input name="nom" type="text" onChange={this.handleChange} value={this.state.nom} />
                </div>
                <div>
                    <label> Image:</label>
                    <input name="lienimg" type="text" onChange={this.handleChange} value={this.state.lienimg} />
                </div>
                <div>
                    <label> type:</label>
                    <input name="type" type="text" onChange={this.handleChange} value={this.state.type} />
                </div>
                <div>
                    <label> quantité:</label>
                    <input name="quantité" type="text" onChange={this.handleChange} value={this.state.quantité} />
                </div>
                <div>
                    <button className="btn-warning" onClick={e => {
                        e.preventDefault()
                        if (this.props.save) {
                            this.props.editcakes(this.state)
                            this.props.clearCakes()
                        }
                        else {
                            this.props.addcakes(this.state)
                        }
                        this.setState({ nom: "", lienimg: "", thèmes: "" })
                    }}>
                        {this.props.save ? 'EDIT CAKE' : 'ADD CAKE'} </button>
                </div>
            </from>

        )
    }

}
const mapStateToProps = state => {
    return {
        save: state.cake.saved
    }
}
export default connect(mapStateToProps, { addcakes, editcakes, clearCakes })(CakeForm)