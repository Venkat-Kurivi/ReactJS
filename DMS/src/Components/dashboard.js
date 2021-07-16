import React from 'react'
import { connect } from "react-redux";

class DashboardComponent extends React.Component {
    constructor(props) {
        super(props);        
    } 

    render() {
        return (
            <div>
               <h2>Dash Board</h2>
               <p>Email: {this.props.Email}</p>
            </div>)

    }
}

const mapStateToProps = state => {
    return {      
      Email : state.email      
    };
  };
  export default connect(mapStateToProps)(DashboardComponent);
