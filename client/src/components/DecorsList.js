import React  from 'react'
import {connect} from 'react-redux'
import DecorsItem  from './DecorItem'
// import {getDecors} from '../actions/decorsActions'

class DecorList extends React.Component{

// componentDidMount(){
//     this.props.getDecors()
// }

render (){
    return(
        <div>
            {
                this.props.decors.length===0 ? (
                <h4>Your list Troops id empty</h4>
                ): (
                    this.props.decor.decors.map(decor => <DecorsItem  decor={decor}/>))
            }

        </div>
    )

  }  
    
}
const mapStateToProps = state =>{
    return{
        decor:state.Decor
    }    
}
// export default connect(mapStateToProps, {getDecors}) (DecorList)
export default connect(mapStateToProps) (DecorList)