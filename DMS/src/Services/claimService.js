import { gConstants } from '../Constants/constants';
import { commonService } from './commonService';

export const claimService = {
    GetClaims: function (email) {
        var url = gConstants.URLS.ClaimsList.replace("{email}", email);
       return commonService.GET(url);
    },
    GetClaimDetails: function (id) {
        var url = gConstants.URLS.ClaimDetails.replace("{id}", id);
       return commonService.GET(url);
    }      
}



