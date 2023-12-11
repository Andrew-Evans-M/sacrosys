import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';

function SellingProduct({topData}) {

    const[topSelling,setTopSelling] = useState([])
    	console.log(topSelling);

    useEffect(() => {
      	setTopSelling(topData || [])
    }, [topData])
    

    const sellingTopData = {
        series: [{ data: topSelling?.map((item) => item?.price || 0) }],
            options: {
            chart: { type: 'bar', height: 380, },
            plotOptions: { bar: { barHeight: '60%', distributed: true, horizontal: true, dataLabels: { position: 'right', }, borderRadius: 6,barWidth: 150, }, },
            colors: ['#0084F7', '#F7A500', '#F77300', '#F70031', '#F70031',],
            dataLabels: {enabled: true, textAnchor: 'center',
            style: { colors: ['#fff'], },
            formatter: function (val, opt) {return "  " + val + "AED/3pc"; },
            offsetX: 0,
                dropShadow: {enabled: true,},},
                stroke: { width: 0, colors: ['#fff'], },
                gridLines: { display: false },
                xaxis: {gridLines: { display: false }, labels: { show: false, }, axisTicks: { show: false },
                    categories: topSelling?.map((item) => item.type || ''), axisBorder: { show: false },},
                    yaxis: { gridLines: { display: false, }, labels: { show: true,style: { colors: '#fff' } }, axisBorder: { show: false }, axisTicks: { show: false }, },
                    grid: {show: false,},
                    legend: { show: false },
            },};

  return (
          <>
            <div className="productSellingCont">
                <h5>Top 5 selling product</h5>
                  <div className="sellingGraph">
                    <ReactApexChart options={sellingTopData?.options} series={sellingTopData?.series} type="bar" height={140} />
                  </div>
            </div>
          </>
  )
}

export default SellingProduct