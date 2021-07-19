import React from 'react'
import { claimService } from '../Services/claimService';

class ClaimDetailsComponent extends React.Component {
    constructor(props) {
        super(props);        
        
        this.state = {
            ClaimId:props.match.params.id,
            ClaimDetails: {}
        };
    }

    componentDidMount() {
        claimService.GetClaimDetails(this.state.ClaimId).then((result) => {
            result.json().then((data) => {
                console.log("data:", data);
                this.setState({ ClaimDetails: data });
                console.log("Claims:", this.state.Claims);
            });
        });
    }

    render(){
        return <div>
            Claim Details information
        </div>
    }
}

 export default ClaimDetailsComponent;