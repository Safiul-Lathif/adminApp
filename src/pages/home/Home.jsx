import React from "react";
import Chart from "../../components/chart/Chart";
import Featuredubfo from "../../components/featuredInfo/FeaturedInfo";
import Widgetlg from "../../components/widgetLg/WidgetLg";
import Widgetsm from "../../components/widgetSm/WidgetSm";
import { userData } from "../userList/dummyData";

import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Featuredubfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homewidgets">
        <Widgetsm />
        <Widgetlg />
      </div>
    </div>
  );
}
