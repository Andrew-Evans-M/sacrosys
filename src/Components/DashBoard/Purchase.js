import React, { useEffect } from 'react'

function Purchase(props) {

    useEffect(() => {
     console.log(props?.purchaseData,"purchaseData");
    }, [])

  return (
          <> 
            <div className="d-flex justify-content-between flex-column mt-2">
                <h5> Total Purchase</h5>
					<p style={{fontSize:9,marginTop:10}}>Cash /{props?.purchaseData?.cash?.items}</p>
						<h4 style={{color:"#8639BA"}}>{props?.purchaseData?.cash?.price} <span style={{color:"#fff"}}>AED</span></h4>
					<p style={{fontSize:9,marginTop:10}}>Credit /{props?.purchaseData?.credit?.items}</p>
                <h4 style={{color:"#8639BA"}}>{props?.purchaseData?.credit?.price} <span style={{color:"#fff"}}>AED</span></h4>
            </div>
        </>
  )
}

export default Purchase