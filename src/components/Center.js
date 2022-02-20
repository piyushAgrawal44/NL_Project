import React, { useEffect, useState } from 'react';

import './css/center.css';
import Data from "./Data";
import Referral_link from "./Referral_link";
import bitcoin from "../imgs/bitcoin.jpg";
// import './components/Left.js';
function Center() {
    const [details, setdetails] = useState([]);
    useEffect(() => {
        fetchRepo();
    }, []);
    async function fetchRepo() {
        await fetch(`https://raw.githubusercontent.com/akshita151199/APIs/main/data`).then(res => res.json()).then(data => {
            setdetails(data.data);
        });
    }
    return (
        <div className="col-12 col-sm-12 order-sm-4 order-md-2 col-md-7 center text-light px-5 pt-4">
            <div className="row">
                <div className="col-3">
                    <b>Section</b>
                    <div class="underline_section"></div>
                </div>
                <div className="col-9">
                    <div className="row p-0">
                        <div className="col-4 offset-8  btn-group-center">
                            <button className='left-bottom-box-btn3 px-2 py-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-wallet2 mr-3" viewBox="0 0 16 16">
                                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                                </svg>
                                <span id='xyz'>0.2 $XYZ</span>
                            </button>
                            <button className='left-bottom-box-btn4 px-2 py-0 ml-2'>Tier 1</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="alert alert-dismissible fade show" id='alert-bg' role="alert">
                    <div className="row">
                        <div className="col-9">
                            <span className='text-dark '>Lorem ispum sample dummy text of the printing and
                                typesetting industry</span>
                            <div className="col-2 mt-2">
                                <button className='btn btn-light py-0 mt-1'>Tutorial</button>
                            </div>
                        </div>

                        <div className="col-3 p-0">
                            <img className='bitcoin-img'
                                src={bitcoin} alt="bitcoin" />
                        </div>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>

            <div className="row mt-3 your-reward-row justify-content-between">
                <div>Your Rewards</div>
                <div className="col-auto">
                    <h2>$ 0.6738382</h2>
                </div>
                <div className="col-auto">
                    <button className='coustom-link-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                        </svg>
                        <span className='coustom-link-span'>Coustom Link</span></button>
                </div>
                <div className="row mt-2">
                    <div className="col-auto tags text-center">$40 AVAX</div>
                    <div className="col-auto tags">$10 BNB</div>
                    <div className="col-auto tags">$210 BTC</div>
                </div>

            </div>

            <div className="row mt-3">
                <div className="col-6">
                    <Referral_link link={"https://www.google.com/"} />
                </div>
                <div className="col-6">
                    <Referral_link link={"https://www.facebook.com/"} />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-2">
                    First Tab
                    <div class="underline_section"></div>
                </div>
                <div className="col-2">
                    Second Tab

                </div>
            </div>

            <div className="row mt-3">
                <div class="table-responsive">
                    <table class="table col-12 table-dark">
                        <thead className="">
                            <tr className='th_row'>
                                <th className='t_heading text-start col-3' >ASSET</th>
                                <th className='t_heading text-start col-2' >AMOUNT</th>
                                <th className='t_heading text-start col-4' >USER ACCOUNT</th>
                                <th className='t_heading text-start col-3 '>REFERRAL EARNING</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.map((x, i) => (
                                    (< Data key={i} x={x} />)
                                ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default Center;
