import React, {  useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import ReactApexChart from 'react-apexcharts';


function Comparison() {

    const [chartState] = useState({
        series: [{name: 'Sales',
        data: [[0, 990], [1, 1000], [2, 1100], [3, 1900], [4, 2100], [5, 2000], [6, 1700], [7, 1100], [8, 992], [9, 1100], [10, 1200]],
        line: { show: false, },}],
            options: {
            chart: {  type: 'line' },
            forecastDataPoints: { count: 7, },
            stroke: { dashArray: [], width: 3, curve: 'smooth'},
            xaxis: { type: 'date', categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], tickAmount: 10, axisBorder: { show: false }, gridLines: { display: false, } },
            colors: ['#05FF00','#F7A500'],
            yaxis: { min: 0, max: 3000, tickAmount: 3,grid: { show: false, },axisBorder: { show: false }, gridLines: { display: false } },
            grid: { show: false }, 
            annotations: {
            points: [
                    {x: 8,y: 992,
                    marker: {size: 6,fillColor: '#05FF00',strokeColor: '#05FF00',radius: 2},
                    label: {borderColor: 'transparent',offsetY: 0,
                    style: {color: '#333',background: '#05FF00' },text: 'Aug 09 (992 AED)'}}
                    ]},
            },});

  return (
            <>
                <div className="dayCompareCont">
                    <div className="mt-2 d-flex flex-row justify-content-between">
                       <span></span>
                        <h3>Day Wise Comparision</h3>
                        <div className="dayNavCont">
                            <Nav variant="pills" defaultActiveKey="/Day">
                                <Nav.Item className='navCont-items'>
                                    <Nav.Link className='navCont-link' eventKey="/Day">Day</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='navCont-items'>
                                    <Nav.Link className='navCont-link' eventKey="Sales">Month</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <div className="mixedChart">
                       <ReactApexChart options={chartState?.options} series={chartState?.series} type="line" width={450}/>
                    </div>
                </div>
            </>
  )
}

export default Comparison