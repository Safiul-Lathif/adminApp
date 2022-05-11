import { Visibility } from "@mui/icons-material";
import React from "react";
import "./WidgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetsm">
      <span className="widgetsmtitle">New Join Members</span>
      <ul className="widgetsmlist">
        <li className="widgetsmlistitm">
          <img src= "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=25" alt="" className="widgetsmimage" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Salman</span>
            <span className="widgetsmusertitle">software developer</span>
          </div>
          <button className="widgetsmbutton">
            <Visibility className="widgesmicon" />
            display
          </button>
        </li>

        <li className="widgetsmlistitm">
          <img src= "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=25" alt="" className="widgetsmimage" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Rasheed</span>
            <span className="widgetsmusertitle">software developer</span>
          </div>
          <button className="widgetsmbutton">
            <Visibility className="widgesmicon" />
            display
          </button>
        </li>
        <li className="widgetsmlistitm">
          <img src= "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=25" alt="" className="widgetsmimage" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Suresh</span>
            <span className="widgetsmusertitle">software developer</span>
          </div>
          <button className="widgetsmbutton">
            <Visibility className="widgesmicon" />
            display
          </button>
        </li>
        <li className="widgetsmlistitm">
          <img src= "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=25" alt="" className="widgetsmimage" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Imran</span>
            <span className="widgetsmusertitle">software developer</span>
          </div>
          <button className="widgetsmbutton">
            <Visibility className="widgesmicon" />
            display
          </button>
        </li>
        <li className="widgetsmlistitm">
          <img src= "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=25" alt="" className="widgetsmimage" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Ahsan</span>
            <span className="widgetsmusertitle">software developer</span>
          </div>
          <button className="widgetsmbutton">
            <Visibility className="widgesmicon" />
            display
          </button>
        </li>
      </ul>
    </div>
  );
}
