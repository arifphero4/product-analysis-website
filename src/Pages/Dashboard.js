import React from "react";
import "./Dashboard.css";
import Header from "../hooks/Header";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="min-h-screen">
      <Header></Header>
      <h1 className="text-center mt-10 pt-16 text-5xl font-bold">
        Our Business Summary
      </h1>
      <div className="cheart  p-8">
        <div>
          <h2 className="text-center">month vs sell</h2>
          <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="month"></XAxis>
            <Tooltip></Tooltip>
            <YAxis dataKey="sell"></YAxis>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="month" stroke="#FFFF00" />
            <Line type="monotone" dataKey="sell" stroke="#82ca9f" />
          </LineChart>
        </div>
        <div>
          <h2 className="text-center">investment vs revenue</h2>
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
