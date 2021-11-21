import React from 'react'
// Dashboard css
import './Dashboard.css'
// importing payment images
import payment from '../../asset/images/payment.png'
import user from '../../asset/images/user.png'
// import calander
import DatePicker from 'sassy-datepicker';
// importing Material icon
import VideocamSharpIcon from '@mui/icons-material/VideocamSharp';

export default function Dashboard() {
    return (
        <div>
            <div className="container mt-3">
                {/* 1st row */}
                <div className="row justify-content-md-between justify-content-center  ">
                    {/* Summery */}
                    <div className="tile pt-2 bg-white my-2">
                        <div className="tile-title">
                            <span>Summery</span>
                        </div>
                        <div className="tiles-bar mt-3">
                            <div className="d-flex justify-content-between">
                                <div className="attended">
                                    <span className="heading">Attended</span>
                                    <div className="d-flex">
                                        <div className="side-dark-bar"></div>
                                        <div className="number-value d-flex justify-content-center align-items-center">02</div>
                                    </div>
                                </div>
                                <div className="attended">
                                    <span className="heading">Appointments</span>
                                    <div className="d-flex">
                                        <div className="side-dark-bar1"></div>
                                        <div className="number-value1 d-flex justify-content-center align-items-center">08</div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <div className="attended">
                                    <span className="heading">Requesst</span>
                                    <div className="d-flex">
                                        <div className="side-dark-bar3"></div>
                                        <div className="number-value3 d-flex justify-content-center align-items-center">10</div>
                                    </div>
                                </div>
                                <div className="attended">
                                    <span className="heading">Canceled</span>
                                    <div className="d-flex">
                                        <div className="side-dark-bar4"></div>
                                        <div className="number-value4 d-flex justify-content-center align-items-center">05</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Earnings */}
                    <div className="tile pt-2 bg-white my-2">
                        <div className="tile-title">
                            <span>Earnings</span>
                        </div>
                        <div className="earning-content d-flex align-items-between flex-column mx-2">
                            <div className="rec-payment">
                                <div className="rec-pay-title mt-4"><span>Total Received Payments</span></div>
                                <div className="rec-pay-payment"><span>$ 12,312</span></div>
                            </div>
                            <div className="Today-Payment d-flex">
                                <div>
                                    <div className="payment-title mt-4"><span>Todays Payments</span></div>
                                    <div className="rec-pay-payment"><span>$ 12,312</span></div>
                                </div>
                                <div className="payment-image">
                                    <img src={payment} alt="payment" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Calender */}
                    <div className="tile bg-white my-2">
                        <div className="calendar-info">
                            <DatePicker className="w-100 h-75 border-0 shadow-none" />
                        </div>
                    </div>
                </div>

                {/* 2nd row */}
                <div className="row justify-content-md-between justify-content-center">
                    <div className="appointment-tile bg-white my-2 pt-2">
                        <div className="tile-title">
                            <span>Today's Appointments 5</span>
                        </div>
                        <div className="appoint-table">
                            <table class="table">
                                <thead>
                                    <tr className="bg-light border-0">
                                        <th scope="col">Patient</th>
                                        <th scope="col">Reason</th>
                                        <th scope="col">Time</th>
                                        <th scope="col"></th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="d-flex align-items-center">
                                            <div className="user1-image me-2">
                                                <img src={user} alt="user" />
                                            </div>
                                            <a className="appt-name" href="#">Dave Johnson</a></td>
                                        <td className="">Neck Wound</td>
                                        <td>4:09 PM</td>
                                        <td className="appt-time">Starts in 3 min</td>    
                                        <td>
                                            <div className="videoicon">
                                                <VideocamSharpIcon className="vid-icon"/>
                                            </div>
                                        </td>    
                                    </tr>
                                    <tr>
                                        <td className="d-flex align-items-center">
                                            <div className="user1-image me-2">
                                                <img src={user} alt="user" />
                                            </div>
                                            <a className="appt-name" href="#">Dave Johnson</a></td>
                                        <td className="">Neck Wound</td>
                                        <td>4:09 PM</td>
                                        <td className="appt-time">Starts in 3 min</td>    
                                        <td>
                                            <div className="videoicon">
                                                <VideocamSharpIcon className="vid-icon"/>
                                            </div>
                                        </td>    
                                    </tr>
                                    <tr>
                                        <td className="d-flex align-items-center">
                                            <div className="user1-image me-2">
                                                <img src={user} alt="user" />
                                            </div>
                                            <a className="appt-name" href="#">Dave Johnson</a></td>
                                        <td className="">Neck Wound</td>
                                        <td>4:09 PM</td>
                                        <td className="appt-time">Starts in 3 min</td>    
                                        <td>
                                            <div className="videoicon">
                                                <VideocamSharpIcon className="vid-icon"/>
                                            </div>
                                        </td>    
                                    </tr>
                                    <tr>
                                        <td className="d-flex align-items-center">
                                            <div className="user1-image me-2">
                                                <img src={user} alt="user" />
                                            </div>
                                            <a className="appt-name" href="#">Dave Johnson</a></td>
                                        <td className="">Neck Wound</td>
                                        <td>4:09 PM</td>
                                        <td className="appt-time">Starts in 3 min</td>    
                                        <td>
                                            <div className="videoicon">
                                                <VideocamSharpIcon className="vid-icon"/>
                                            </div>
                                        </td>    
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* request */}
                    <div className="tile pt-2 bg-white my-2">
                        <div className="tile-title d-flex justify-content-between">
                            <div><span>Summery</span></div>
                            <div className="request d-flex flex-column text-center">
                                <div className="viewall-count">5</div>
                                <div><a href="#">View All</a></div>
                            </div>
                        </div>
                        <div className="tiles-bar mt-2 d-flex flex-column ">
                            <div className="requrest1">
                                <div className="request-user"><span>John Doe</span></div>
                                <div className="request-date"><span>12/05/2020 | 03:45 PM</span></div>
                                <div className="request-dis"><span>Disease: Choronic Issue</span></div>
                            </div>
                            <div className="requrest1 mt-3">
                                <div className="request-user"><span>John Doe</span></div>
                                <div className="request-date"><span>12/05/2020 | 03:45 PM</span></div>
                                <div className="request-dis"><span>Disease: Choronic Issue</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
