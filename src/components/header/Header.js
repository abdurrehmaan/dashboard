import React from 'react'
// import header css
import './Header.css'
// importing userimage
import user from '../../asset/images/user.png'
// material ui icons
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {
    return (
        <div>
            <div className="container mt-3  h-100">

                {/* 1stn row */}
                <div className="row h-100 align-items-center  ">
                    <div className="d-flex h-100 justify-content-between align-items-center">
                        <div className="rightSide d-flex flex-sm-row flex-column align-item-center">
                            <div className="userinfo mx-3 d-flex align-items-center">
                                {/* user image */}
                                <div className="user-image">
                                    <img src={user} alt="user" />
                                </div>
                                {/* user info */}
                                <div className="user-info mx-2">
                                    <div className="username"><a>Dr. John Doe</a></div>
                                    <div className="specialty"><span>Specialty:</span></div>
                                </div>
                            </div>

                            <div className="header-cont mx-3">
                                {/* availability section */}
                                <div className="x1">
                                    <div><span>Availability: <span className="fw-bold">12:00 AM to 9:00 PM</span></span></div>
                                    <div className="mt-2"><span>Duration: <span className="fw-bold">15 minutes</span></span></div>
                                </div>
                                <div className="text-end">
                                    <a href="">Set Availability</a>
                                </div>
                            </div>
                        </div>
                        {/* notifcation and logout btn */}
                        <div className="leftSide d-flex align-item-center">
                            <div className="notification mx-4">
                                <div className="noti-count d-flex justify-content-center align-items-center">2</div>
                                <div className="notification-bell"><NotificationsIcon color="primary" fontSize="large" /></div>
                            </div>
                            <div className="logout"><LogoutIcon color="primary" fontSize="large" />Logout</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
