import React from 'react'
import { useHistory } from "react-router";

export const BindClaims = function (list) {
    const history = useHistory();

    const navigateCliamDetials = function (claimObj) {
        debugger
        history.push("/claimDetails/" + claimObj._id);
    }

    return <div style={{ border: "3px solid red" }}>
        <table>
            <tbody>
                <tr>
                    <th>Document Name</th>
                </tr>
                {list.list.map((claim) =>
                    <tr key={claim.id}>
                        <td>
                            <a href="#" onClick={navigateCliamDetials(claim)}>
                                {claim.documentName}</a></td>
                    </tr>
                )}

            </tbody>
        </table>
    </div>;
}
