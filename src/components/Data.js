import React from 'react';
// import './components/Left.js';
function Data({x }) {
    return (
        <tr>
        <td className="col-3">
            <div className="row">
                <div className="col-2">
                    <img src={x.img} alt="img" />
                </div>
                <div className="col-auto">
                    <div className="row font-small">
                        {x.asset}
                    </div>
                    <div className="row d-flex mt-2">
                        <div className="col-auto color-coustom">
                            {x.type}
                        </div>
                        <div className="badge bg-secondary col-auto color-coustom text-light">
                            {x.chain.name}
                        </div>
                    </div>
                </div>
            </div>
        </td>

        <td className="col-2">
            <div className="row">
                <div className="col-auto">
                    <div className="row text-center font-small">
                        {x.amount} BNB
                    </div>
                    <div className="row d-flex mt-1">
                        <div className="col-auto color-coustom">
                            {x.state}
                        </div>
                    </div>
                </div>
            </div>
        </td>

        <td className="col-4">
            <div className="row">
                <div className="col-6">
                    <div className="row user-span">
                        {x.user}
                    </div>
                   
                </div>
            </div>
        </td>

        <td className="col-3">
            <div className="row">
                <div className="col-auto">
                    <div className="row text-center font-small">
                        {x.referral_earnings}
                    </div>
                    <div className="row d-flex mt-1">
                        <div className="col-auto color-coustom">
                            View on BSC Scan <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10" height="10" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </td>
    </tr>
     

    );
}

export default Data;
