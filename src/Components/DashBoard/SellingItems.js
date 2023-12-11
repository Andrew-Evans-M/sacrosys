import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';

function SellingItems({lowData}) {

	const [leastProduct,setLeastProduct] = useState([]);

	useEffect(() => {
		setLeastProduct(lowData || [])
	}, [lowData])
	

    const sellingTopItem = {
        series: [{ data: leastProduct?.map((item) => item?.price) }],
        options: {chart: { type: 'bar', height: 380, },
        plotOptions: { bar: { barHeight: '60%',barWidth: '80%',  distributed: true, horizontal: true, dataLabels: { position: 'right', }, borderRadius: 6,barWidth: 150, }, },
        colors: ['#9410A5', '#F70031', '#F77300', '#F7A500', '#0084F7',],
            dataLabels: {
            enabled: true, textAnchor: 'center',
            style: { colors: ['#fff'], },
            formatter: function (val, opt) { return "  "+ val +"" + "AED/5pc"},
                offsetX: 0,
                dropShadow: { enabled: true,}},
                stroke: { width: 0, colors: ['#fff'] },
                gridLines: { display: false },
                    xaxis: {gridLines: { display: false }, labels: { show: false, }, axisTicks: { show: false },
                    categories: leastProduct?.map((item) => item?.type), axisBorder: { show: false }},
                    yaxis: { gridLines: { display: false, }, labels: { show: true,style: { colors: '#fff' }  }, axisBorder: { show: false }, axisTicks: { show: false } },
                        grid: {show: false},
                        legend: { show: false },
                  }};

  return (
            <> 
              <div className="productSellingCont">
                 <h5>Least 5 selling product</h5>
                   <div className="productGraph">
                     <ReactApexChart options={sellingTopItem.options} series={sellingTopItem.series} type="bar" height={140} />
                   </div>
              </div>
            </>
  )
}

export default SellingItems