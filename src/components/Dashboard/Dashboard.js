import React, { useEffect, useState } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='container my-4'>
            <h1 className='dash-board fw-bold'>Dashboard</h1>
            <div>
                <h3 className='text-start'>Month Wise Sell Chart</h3>
                <ResponsiveContainer width='95%' height={400}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                        {/* <Line type='monotone' dataKey='revenue' stroke='#8884d8'></Line> */}
                        <Line type='monotone' dataKey='sell' stroke='#82ca9d'></Line>
                        <XAxis dataKey='month'></XAxis>
                        <YAxis dataKey='sell'></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h3 className='text-start mb-4'>Month Wise Revenue Chart</h3>
                <ResponsiveContainer width='95%' height={400}>
                    <ComposedChart data={data}>
                        <XAxis dataKey="month"></XAxis>
                        <YAxis dataKey='revenue'></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                        <Area type="monotone" fill="#8884d8" stroke="#8884d8"></Area>
                        <Bar dataKey="revenue" barSize={20} fill="#413ea0"></Bar>
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300"></Line>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;