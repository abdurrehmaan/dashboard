import React from 'react'
// Scheduler css
import './Scheduler.css'
// importing payment images
import payment from '../../asset/images/payment.png'
import user from '../../asset/images/user.png'
// importing Material icon
import VideocamSharpIcon from '@mui/icons-material/VideocamSharp';
// importing schedular
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT} from 'react-big-scheduler'
import 'react-big-scheduler/lib/css/style.css'
import moment from 'moment'



export default function Scheduler1() {
   
    return (
        <div>
            <div className="container mt-3">

                {/* 1stn row */}
                <div className="row justify-content-md-between justify-content-center">
                    <div className="scheduler-tile bg-white my-2 pt-2">
                        <div className="tile-title">
                            <span>Scheduler</span>
                        </div>

                        
                    </div>
                    {/* request */}
                    <div className="schedul-right-side">
                        {/* appo */}
                    <div className="tile2 p-3 bg-white my-2">
                        <div className="tile-title d-flex justify-content-between">
                            <div><span>Appointments</span></div>
                            <div className="request d-flex flex-column text-center">
                                <div className="viewall-count">5</div>
                                <div><a href="#">View All</a></div>
                            </div>
                        </div>
                        <div className="tiles-bar mt-2 d-flex flex-column ">
                            <div className="requrest1 d-flex">
                                <div className="profile d-flex flex-column justify-content-center align-items-center">
                                    <div className="user2-image">
                                        <img src={user} alt="user" />
                                    </div>
                                    <div className="dnt">
                                        <div>2:00 AM</div>
                                        <div>Today</div>
                                    </div>
                                </div>
                                <div className="profile-info px-3">
                                    <div className="request-user mt-1"><span>John Doe</span></div>
                                    <div className="request-dis mt-1"><span>Male  23yrs</span></div>
                                    <div className="request-dis mt-1"><span>Some text Here</span></div>
                                    <hr></hr>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="profile-time">Starts in 3 mins </div>
                                        <div>
                                        <   div className="videoicon">
                                                <VideocamSharpIcon className="vid-icon"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="tiles-bar mt-2 d-flex flex-column ">
                            <div className="requrest1 d-flex">
                                <div className="profile d-flex flex-column justify-content-center align-items-center">
                                    <div className="user2-image">
                                        <img src={user} alt="user" />
                                    </div>
                                    <div className="dnt">
                                        <div>2:00 AM</div>
                                        <div>Today</div>
                                    </div>
                                </div>
                                <div className="profile-info px-3">
                                    <div className="request-user mt-1"><span>John Doe</span></div>
                                    <div className="request-dis mt-1"><span>Male  23yrs</span></div>
                                    <div className="request-dis mt-1"><span>Some text Here</span></div>
                                    <hr></hr>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="profile-time">Starts in 3 mins </div>
                                        <div>
                                        <   div className="videoicon">
                                                <VideocamSharpIcon className="vid-icon"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="tile1 p-3 bg-white my-2">
                        <div className="tile-title d-flex justify-content-between">
                            <div><span>Requests</span></div>
                            <div className="request d-flex flex-column text-center">
                                <div className="viewall-count">5</div>
                                <div><a href="#">View All</a></div>
                            </div>
                        </div>
                        <div className="tiles-bar mt-4 d-flex flex-column ">
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
        </div>
    )
}
