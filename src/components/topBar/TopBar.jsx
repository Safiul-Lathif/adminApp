import React from 'react'
import "./TopBar.css"
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className='topbarwrapper'>
            <div className="topleft">
             <span className="logo">Beez POS</span>
            </div>
            <div className="topright">
              <Link to="/NotificationPage" className="linnk">
              <div className="topbariconcontainer">
              <NotificationsNoneIcon/>
              <span className="topiconbag">2</span>
              </div>
              </Link>
              <div className="topbariconcontainer">
             <LanguageIcon/>
             <span className="topiconbag">2</span>
              </div>
              <div className="topbariconcontainer">
             <SettingsIcon/>
             </div>
             <img src= "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=25" alt="" className="topavator" />
             </div>
        </div>
     </div>
  )
}


