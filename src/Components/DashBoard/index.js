import React from 'react'
import Header from './Header'
import Sales from './Sales'
import "../../assets/css/dashBoard.css"

function index() {
  return (
			<>
			<div className="mainContentHere">
				<Header />
				<Sales />
			</div>
			</>
  )
}

export default index