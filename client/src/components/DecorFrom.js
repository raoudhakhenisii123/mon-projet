import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { v4 as uuidv4 } from 'uuid';
import { addDecors, editDecors , clearDecors } from '../actions/decorsActions'

class DecorForm extends Component {
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
                    <label> Theme:</label>
                    <input name="thèmes" type="text" onChange={this.handleChange} value={this.state.thèmes} />
                </div>
                <div>
                    <button className="btn-warning" onClick={e => {
                        e.preventDefault()
                        if (this.props.save) {
                            this.props.editDecors(this.state)
                            this.props.clearDecors()
                        }
                        else {
                            this.props.addDecors(this.state)
                        }
                        this.setState({ nom: "", lienimg: "", thèmes: "" })
                    }}>
                        {this.props.save ? 'EDIT DECOR' : 'DECOR'} </button>
                </div>
            </from>

        )
    }

}
const mapStateToProps = state => {
    return {
        save: state.Decor.saved
    }
}
export default connect(mapStateToProps, { addDecors, editDecors , clearDecors })(DecorForm)