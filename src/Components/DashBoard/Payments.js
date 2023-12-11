import React, { useEffect } from 'react'

function Payments(props) {

    useEffect(() => {
        console.log(props?.paymentsData,"paymentsData");
       }, [])
       
  return (
            <>
                <div className="d-flex justify-content-between flex-column mt-2">
                    <h5>Total Payments</h5>
                        <p style={{fontSize:9,marginTop:10}}>Cash /{props?.paymentsData?.cash?.items}</p>
                            <h4 style={{color:"#EF7075"}}>{props?.paymentsData?.cash?.price} <span style={{color:"#fff"}}>AED</span></h4>
                        <p style={{fontSize:9,marginTop:10}}>Credit /{props?.paymentsData?.check?.items}</p>
                    <h4 style={{color:"#F2B45C"}}>{props?.paymentsData?.check?.price} <span style={{color:"#fff"}}>AED</span></h4>
                </div>    
            </>
  )
}

export default Payments