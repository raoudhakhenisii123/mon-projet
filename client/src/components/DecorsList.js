import React  from 'react'
import {connect} from 'react-redux'
import DecorsItem  from './DecorItem'
import {get_Decors} from '../actions/decorsActions'

class DecorList extends React.Component{

componentDidMount(){
    this.props.get_Decors()
}

render (){
    return( 
        <div> {
            this.props.decor.length === 0 ? (<h4>Your list Troops id empty</h4>

           ):(
               this.props.decor.decors.map(decor => <DecorsItem key={decor} decor={decor}/>))
                 
            
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
export default connect(mapStateToProps, {get_Decors}) (DecorList)