import { gConstants } from '../Constants/constants';

export const commonService = {
    POST: function (BodyData, apiUrl) {
        var url = gConstants.URLS.BaseAPI + apiUrl;
        return fetch(url, {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(BodyData)

        });
    },
    GET: function (apiUrl) {
        var url = gConstants.URLS.BaseAPI + apiUrl;
        return fetch(url, {
            method: 'GET',
            headers: { "Content-type": "text/plain" }
        });
    }    
}



