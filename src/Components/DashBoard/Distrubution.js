import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';

function Distrubution({distributionData}) {

    const[distData,setDistData] = useState({});
    console.log(distData,"distdata");

    const [chartStates, setChartStates] = useState({
        series: [],
        options: {
            chart: {width: 200,type: 'donut'},
            labels: [],
            dataLabels: {enabled: false},
            legend: { show: false},
            colors: ['#A7236F', '#F56C40', '#F7DC67', '#23CCD1'],
            stroke: {show: false},
            plotOptions: {
                pie: {donut: {size: ['60%', '75%', '90%', '100%'], 
                labels: {show: true,name: {fontSize: '22px'},
                value: {fontSize: '16px'},
                total: {show: true,label: 'Cash'},
                }}}}},
        });

        useEffect(() => {
            if (distributionData && Array?.isArray(distributionData?.distributionData)) {
                setDistData(distributionData);
                const seriesData = distributionData?.distributionData?.map(item => item?.data || []);
                const labels = distributionData.distributionData?.map(item => item?.type || []);
                    setChartStates(prevState => ({...prevState,series: seriesData,options: 
                        {...prevState.options, labels: labels,},}));
            } 
            else {
              console.error('Invalid distributionData:');
            }
          }, [distributionData]);

  return (
            <>
              <div className="collectCont">
                    <div className="totalCont">
                        <h5>Collection distribution</h5>
                            <h5 style={{fontWeight:100}}>Total amount</h5>
                        <h4>{distData.totalAmount !== undefined ? distData.totalAmount + ' AED' : ''}</h4>
                        <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#23CCD1" class="bi bi-app me-2" viewBox="0 0 16 16">
                                        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4z"/>
                                    </svg>
                                    <h5 style={{fontSize:8,marginTop:0,fontWeight:500}}>Cash 40%</h5>
                                </div>
                                <div className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#F7DC67" class="bi bi-app me-2" viewBox="0 0 16 16">
                                        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4z"/>
                                    </svg>
                                    <h5 style={{fontSize:8,marginTop:0,fontWeight:500}} >Google pay 25%</h5>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#F56C40" class="bi bi-app me-2" viewBox="0 0 16 16">
                                        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4z"/>
                                    </svg>
                                    <h5 style={{fontSize:8,marginTop:0,fontWeight:500}}>Credit card 30%</h5>
                                </div>
                                <div className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#A7236F" class="bi bi-app me-2" viewBox="0 0 16 16">
                                        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4z"/>
                                    </svg>  
                                    <h5 style={{fontSize:8,marginTop:0,fontWeight:500}}>Credit 15%</h5>
                                </div>
                            </div>
                        </div>
                          
                    </div>
                <div className="donutCont">
                    <ReactApexChart options={chartStates.options}series={chartStates.series} type="donut" width={200}/>
                </div>
               </div>
            </>
  )                                                                                                                                                                                                 
}

export default Distrubution