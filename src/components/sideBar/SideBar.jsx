import "./SideBar.css";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {  
  Email,
  Feedback,
  Inventory,
  ManageAccounts,
  Message,
  ProductionQuantityLimits,
  ReportGmailerrorredOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Dashboard</h3>
          <ul className="sodebarlist">
            <Link to="/" className="link">
              <li className="sidebarlist active">
                <HomeIcon className="sidebaricon" /> Home
              </li>
            </Link>
            <li className="sidebarlist">
              <MultilineChartIcon className="sidebaricon" /> Analytics
            </li>
            <li className="sidebarlist">
              <TrendingUpIcon className="sidebaricon" /> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Quickmenu</h3>
          <ul className="sodebarlist">
            <Link to="/users" className="link">
              <li className="sidebarlist">
                <ShoppingCart className="sidebaricon" />
                Orders
              </li>
            </Link>
            <Link to="/products"className="link">
              <li className="sidebarlist">
                <ProductionQuantityLimits className="sidebaricon" /> Products
              </li>
            </Link>
            <li className="sidebarlist">
              <Inventory className="sidebaricon" /> Reports
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Notification</h3>
          <ul className="sodebarlist">
            <li className="sidebarlist">
              <Email className="sidebaricon" /> Mail
            </li>
            <li className="sidebarlist">
              <Feedback className="sidebaricon" /> Feedback
            </li>
            <li className="sidebarlist">
              <Message className="sidebaricon" /> Messages
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Staff</h3>
          <ul className="sodebarlist">
            <li className="sidebarlist">
              <ManageAccounts className="sidebaricon" /> Manage
            </li>
            <li className="sidebarlist">
              <MultilineChartIcon className="sidebaricon" /> Analayties
            </li>
            <li className="sidebarlist">
              <ReportGmailerrorredOutlined className="sidebaricon" /> Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
