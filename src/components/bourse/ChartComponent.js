// components/ChartComponent.js
import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import "./page.modules.css";

Chart.register(...registerables, zoomPlugin);

const ChartComponent = ({ chartData }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // const data = {
        //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        //     datasets: [{
        //         label: 'My First dataset',
        //         backgroundColor: 'rgb(255, 99, 132)',
        //         borderColor: 'rgb(255, 99, 132)',
        //         data: [0, 10, 5, 2, 20, 30, 45]
        //     }]
        // };

        const config = {
            type: 'line',
            data: chartData,
            options: {
                plugins: {
                    zoom: {
                        pan: {
                            enabled: true,
                            mode: 'xy'
                        },
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            pinch: {
                                enabled: true
                            },
                            mode: 'xy'
                        }
                    }
                }
            }
        };

        const myChart = new Chart(ctx, config);

        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <div>
            <canvas ref={chartRef} width="400" height="200"></canvas>
            {/* <div className="chartCard">
                <div className="chartBox"> */}
                    <input onChange="filterData()" type="date" id="startDate" value="2022"></input>
                    <input onChange="filterData()" type="date" id="startDate" value="2023"></input>
                {/* </div>
            </div> */}
            <button onClick={() => chartRef.current.chart.resetZoom()}>Reset Zoom</button>
        </div>
    );
};

export default ChartComponent;