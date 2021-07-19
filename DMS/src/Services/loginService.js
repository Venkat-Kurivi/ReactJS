import { gConstants } from '../Constants/constants';
import { commonService } from '../Services/commonService';

export const loginService = {
    Login: function (bodyData) {
        return commonService.POST(bodyData, gConstants.URLS.LoginAPI);
    }
}



