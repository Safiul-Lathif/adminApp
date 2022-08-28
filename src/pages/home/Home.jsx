import React from "react";
import Chart from "../../components/chart/Chart";
import Featuredubfo from "../../components/featuredinfo/FeaturedInfo";
import { userData } from "../../DummyData";
import ProductName from "../../components/widgetsm/Product"
import "./Home.css";
import Orders from "../../components/widgetlg/Order";

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
        <ProductName />
        <Orders />
      </div>
    </div>
  );
}
