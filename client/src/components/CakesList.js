import React  from 'react'
import {connect} from 'react-redux'
import CakesItem from './CakesItem'
import {get_cakes} from '../actions/cakesActions'

class CakesList extends React.Component{

componentDidMount(){
    this.props.get_cakes()
}

render (){
    return(
        <div>
            {
                this.props.cakes.length===0 ? ( <h4>Your list Troops id empty</h4>
                ): (
                    this.props.cakes.cakes.map(cake => <CakesItem   cakes={cake}/>))
            }

        </div>
    )

  }  
    
}
const mapStateToProps = state =>{
    return{
        cakes:state.cake
    }    
}
export default connect(mapStateToProps, {get_cakes}) (CakesList)
