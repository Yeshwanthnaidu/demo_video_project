import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Row, Col } from 'react-bootstrap';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';

const averageChartColors = {
    'positive': '#48C9B0',
    'negative': '#EC7063',
    'neutral': '#F5B041',
}

const chartDataColors = {
    'angry': '#CD6155',
    'disgusted': '#9B59B6',
    'fear': '#5499C7',
    'happy': '#5499C7',
    'neutral': '#F4D03F',
    'sad': '#EB984E',
    'surprised': '#5D6D7E'
}

const Analyze = (props) => {
    const { analyzedData: { chartData = {}, averageChart = {} }, analyze } = props;
    const convertedChartData = Object.keys(chartData).map(key => { return { name: key, value: chartData[key], color: chartDataColors[key] } });
    const convertedAverageChart = Object.keys(averageChart).map(key => { return { name: key, value: averageChart[key], color: averageChartColors[key] } });

    return (
        <SkeletonTheme baseColor="#ccc" highlightColor="#ddd">
            <Row className='w-100'>
                <div className={`w-100 p-5 ${!analyze ? 'd-none' : ''}`}>
                    <Skeleton count={8} />
                </div>
                <div className={`w-100 p-5 ${props.analyzedData == '' ? 'd-none' : ''}`}>
                    <Col md={6}>
                        <Row className='w-100 p-5'>
                            <h2 className='text-center'>Emotions Graph</h2>
                        </Row>
                        <Row className='d-flex justify-content-center'>
                            <ResponsiveContainer width='100%' height={600}>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={convertedChartData}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="value" fill="#8884d8">
                                        {convertedChartData.map((data) => {
                                            return <Cell fill={data.color} />
                                        })}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <hr />
                    </Col>
                    <Col md={6}>
                        <Row className='w-100 p-5'>
                            <h2 className='text-center'>Summary Graph</h2>
                        </Row>
                        <Row>
                            <ResponsiveContainer width='100%' height={600}>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={convertedAverageChart}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="value" fill="#8884d8">
                                        {convertedAverageChart.map((data) => {
                                            return <Cell fill={data.color} />
                                        })}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Row>
                    </Col>
                </div>
            </Row >
        </SkeletonTheme >
    )
}

export default Analyze