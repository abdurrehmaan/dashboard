import React from 'react'
// importing sidebar css
import './Sidebar.css'
// importing logo from asset folder
import logo from '../../asset/images/logo.png'
// importing icons from material ui 
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PaymentIcon from '@mui/icons-material/Payment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

// importing Router and switch and link
import {Route,Link,Switch} from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="d-flex justify-content-center ">
            
            <ul className="sidebar-menu my-3 ">
                {/* logo */}
                <li><a >
                    <div className="logo my-3">
                        <img src={logo} alt="logo" />
                    </div>
                </a></li>
                {/* menu */}
                <li><DashboardIcon className="mx-2" /><a>Dashboard</a></li>
                <li><CalendarTodayOutlinedIcon className="mx-2" /><a>Scheduler</a></li>
                <li><PersonAddIcon className="mx-2" /><a>Patients</a></li>
                <li><PaymentIcon className="mx-2" /><a>Payments</a></li>
                <li><AlternateEmailIcon className="mx-2" /><a>Contact Us</a></li>
            </ul>
        </div>
    )
}
