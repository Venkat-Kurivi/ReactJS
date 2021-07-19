import React from 'react'
import { connect } from "react-redux";
import { dashboardService } from '../Services/dashboardService';
import { BindClaims } from '../Components/bindClaims';

class DashboardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Claims: []
        };
    }
    componentDidMount() {
        dashboardService.GetClaims(this.props.Email).then((result) => {
            result.json().then((data) => {
                console.log("data:", data);
                this.setState({ Claims: data });
                console.log("Claims:", this.state.Claims);
            });
        });
    }
    render() {
        return (
            <div>
                <h2>Dash Board</h2>
                <p>Email: {this.props.Email}</p>

                <p>Claims List of {this.props.Email}</p>
                {this.state.Claims && this.state.Claims.length > 0 && <BindClaims list={this.state.Claims} ></BindClaims>}
            </div>)

    }
}






const mapStateToProps = state => {
    return {
        Email: state.email
    };
};
export default connect(mapStateToProps)(DashboardComponent);
