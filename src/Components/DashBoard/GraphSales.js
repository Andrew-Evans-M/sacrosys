import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';

function Graph({GraphSalesData}) {

	const [sales,setSales] = useState([]);
	console.log(sales,"salesdsdfsf");
	
	useEffect(() => {
		setSales(GraphSalesData || [])
	}, [GraphSalesData])

	const chartData = {
		series: [{ data:sales?.map(item => item?.saleRate || 0)}],
		colors: ['#fff'],
		options: {
			chart: { type: 'bar', height: 380 },
			plotOptions: { bar: { barHeight: '60%', distributed: true, horizontal: true, dataLabels: { position: 'right'} } },
			colors: ['#8639BA', '#AE45C6', '#E958A1', '#E8E465', '#F2B45C', '#EF7075'],
			dataLabels: {
				enabled: true, textAnchor: 'center',
				style: { colors: ['#fff'] },
				formatter: function (val, opt) { return "  "+val+"%"},
				offsetX: 0,
				dropShadow: {enabled: true}
			},
			stroke: { width: 0, colors: ['#fff'] },
			gridLines: { display: false },
			xaxis: {gridLines: { display: false }, labels: { show: false }, axisTicks: { show: false },
			categories: sales?.map(item => item?.type || ''),labels: { style: { colors: '#000' } }, axisBorder: { show: false }},
			yaxis: { gridLines: { display: false, }, labels: { show: true,style: { colors: '#fff' } }, axisTicks: { show: false },  },
			grid: {show: false, },
			legend: { show: false },
		}};

  return (
			<> 
				<div className="comparisonCardCont">
					<div className="d-flex justify-content-between align-items-center p-0">
						<h5> Sales wise comparison</h5>
							<div className="d-flex justify-content-between p-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2DFF1A" class="bi bi-caret-up-fill me-2" viewBox="0 0 16 16">
									<path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
								</svg>
								<span style={{color:"#2DFF1A"}}>3% </span>
							</div>
					</div>
					<div className="compareProgressCont">
						<ReactApexChart options={chartData?.options} series={chartData?.series} type="bar" height={180} />
					</div>
				</div>
			</>
  )
}

export default Graph