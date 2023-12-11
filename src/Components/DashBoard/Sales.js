import React, { useEffect, useState } from 'react'
import "../../assets/css/dashBoard.css"
import Distrubution from './Distrubution';
import SellingProduct from './SellingProduct';
import SellingItems from './SellingItems';
import Comparison from './Comparison';
import GraphSales from "./GraphSales"
import dashBoardService from '../../Services/dashBoardService';
import Purchase from './Purchase';
import Payments from './Payments';

function Sales() {

	const[data,setData] = useState({});
			{console.log(data,"data");}

	useEffect(() => {
		getDashboardData();
	}, [])

	useEffect(() => {
		console.log(data,"data");
	}, [data])

	const getDashboardData = () => {
		dashBoardService.getDashBoardDetails().then((res) => (
				console.log(res,"res"),
		setData(...res?.data))
	).catch((error) => {
		console.log(error);
		})
	}	
	
  return (
          <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 col-xxl-7">
                        <div className="row">
                           <div className="col-12 col-sm-4 col-md-3 col-lg-3">
                            <div className="cardCont">
                                <div className="d-flex justify-content-between align-items-center">
                                  <p>Today sales</p>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
										<path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
										<path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                   </svg>
                                </div>
                            	<h4 style={{color:"#05FDF1"}}>{data?.todaySale?.price}<span style={{color:"#fff"}}>AED</span></h4>
								<div className="d-flex justify-content-start align-items-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2DFF1A" class="bi bi-caret-up-fill me-1" viewBox="0 0 16 16">
										<path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
									</svg>
									<p className='mb-0' style={{color:"#2DFF1A",fontSize:10}}>{data?.todaySale?.progress}% than yerterday</p>
								</div>
                          	</div>
                        	</div>
							<div className="col-12 col-sm-4 col-md-3 col-lg-3">
								<div className="cardCont">
									<p>Top Sale Time</p>
										<h4 style={{color:"#FFD400"}}>{data?.topSaleTime?.price}<span style={{color:"#fff"}}>AED</span></h4>
									<p style={{fontSize:10}}>{data?.topSaleTime?.startTime}pm-{data?.topSaleTime?.endTime}pm</p>
								</div>
							</div>
							<div className="col-12 col-sm-4 col-md-2 col-lg-2">
								<div className="cardCont">
									<p>Door Delivery</p>
										<h4 className='d-flex align-items-center' style={{color:"#FF8006"}}>{data?.todaySale?.price}<span style={{color:"#fff"}}>AED</span></h4>
									<p style={{fontSize:10}}>Bills {data?.doorDeliverySale?.bills}</p>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-2 col-lg-2">
								<div className="cardCont">
									<p>Bills And Pax</p>
									<h4 style={{color:"#FF005A"}}>{data?.billsAndPax?.bills}/{data?.billsAndPax?.pax}</h4>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-2 col-lg-2">
								<div className="cardCont">
									<p>Void</p>
										<h4 style={{color:"#009FFF"}}>{data?.voidTotal?.bills}/{data?.voidTotal?.items}</h4>
									<p style={{fontSize:9}}>Bills and items</p>
								</div>
							</div>
                        </div>
							<div className="row mt-3">
								<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									<GraphSales GraphSalesData ={data?.salesComparision} />
								</div>
								<div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
									<div className="comparisonCardCont">
										<Purchase purchaseData = {data?.totalPurchase}/>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
									<div className="comparisonCardCont">
										<Payments paymentsData = {data?.totalPayments}/>
									</div>
								</div>
							</div>
                    </div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5 col-xxl-5">
							<Comparison />
						</div>
						</div>
					<div className="row mt-3">
						<div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
							<Distrubution distributionData = {data?.distribution}/>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
							<SellingProduct topData ={data?.topProducts} />
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
							<SellingItems lowData = {data?.leastProducts}/>
						</div>
					</div>
            </div>
          </>
    
  )
}

export default Sales