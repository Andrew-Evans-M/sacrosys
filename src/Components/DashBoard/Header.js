import React from 'react'
import "../../assets/css/dashBoard.css"
import Nav from 'react-bootstrap/Nav';

function Header() {

  return (

        <div className="container">
            <div className="row">
                <div className="mainHeadCont">
                    <div className="headCont">
                        <div className="d-flex justify-content-start align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                                <h3 className='ms-3'>Branch name</h3>
                        </div>
                            <div className="navCont">
                                <Nav variant="pills" defaultActiveKey="/Dashboard">
                                    <Nav.Item className='navCont-items'>
                                        <Nav.Link className='navCont-link' eventKey="/Dashboard">Dashboard</Nav.Link>
                                    </Nav.Item>
                                        <Nav.Item className='navCont-items'>
                                            <Nav.Link className='navCont-link' eventKey="Sales">Sales</Nav.Link>
                                        </Nav.Item>
                                            <Nav.Item className='navCont-items'>
                                                <Nav.Link className='navCont-link' eventKey="Payment">Payment</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className='navCont-items'>
                                                <Nav.Link className='navCont-link' eventKey="Tax">Tax</Nav.Link>
                                            </Nav.Item>
                                        <Nav.Item className='navCont-items'>
                                            <Nav.Link className='navCont-link' eventKey="MIS">MIS</Nav.Link>
                                        </Nav.Item>
                                    <Nav.Item className='navCont-items'>
                                        <Nav.Link className='navCont-link' eventKey="Purchase only">Purchase only</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="headRightCont">
                                    <p>Export to Excel</p>
                                <svg className='ms-3' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#F8F8F8">
                                    <path d="M9 15.6664C8.98333 15.6664 8.966 15.6651 8.94933 15.6624L0.282667 14.3291C0.12 14.3037 0 14.1637 0 13.9997V2.66641C0 2.51108 0.107333 2.37641 0.258667 2.34174L8.92533 0.341745C9.024 0.319745 9.12867 0.342411 9.208 0.405745C9.28733 0.468411 9.33333 0.564411 9.33333 0.666411V15.3331C9.33333 15.4304 9.29133 15.5231 9.21733 15.5857C9.156 15.6384 9.07933 15.6664 9 15.6664ZM0.666667 13.7137L8.66667 14.9444V1.08508L0.666667 2.93174V13.7137Z" fill="#F8F8F8"/>
                                        <path d="M15.6667 14.333H9.00008C8.81608 14.333 8.66675 14.1837 8.66675 13.9997C8.66675 13.8157 8.81608 13.6664 9.00008 13.6664H15.3334V2.33305H9.00008C8.81608 2.33305 8.66675 2.18372 8.66675 1.99972C8.66675 1.81572 8.81608 1.66638 9.00008 1.66638H15.6667C15.8507 1.66638 16.0001 1.81505 16.0001 1.99972V13.9997C16.0001 14.1837 15.8507 14.333 15.6667 14.333Z" fill="#F8F8F8"/>
                                            <path d="M6.33333 10.9998C6.22199 10.9998 6.11333 10.9444 6.05066 10.8431L2.71733 5.50976C2.61999 5.35309 2.66733 5.14776 2.82333 5.05043C2.97999 4.95243 3.18533 4.99976 3.28266 5.15643L6.61599 10.4898C6.71333 10.6458 6.66599 10.8518 6.50999 10.9491C6.45533 10.9831 6.39399 10.9998 6.33333 10.9998Z" fill="#F8F8F8"/>
                                                <path d="M2.99999 10.9998C2.93999 10.9998 2.87866 10.9838 2.82333 10.9491C2.66733 10.8518 2.61999 10.6458 2.71733 10.4898L6.05066 5.15643C6.14799 4.99976 6.35333 4.95243 6.50999 5.05043C6.66599 5.14776 6.71333 5.35309 6.61599 5.50976L3.28266 10.8431C3.21933 10.9444 3.11066 10.9998 2.99999 10.9998Z" fill="#F8F8F8"/>
                                                    <path d="M11.6666 14.333C11.4826 14.333 11.3333 14.1837 11.3333 13.9997V1.99972C11.3333 1.81572 11.4826 1.66638 11.6666 1.66638C11.8506 1.66638 11.9999 1.81505 11.9999 1.99972V13.9997C11.9999 14.1837 11.8506 14.333 11.6666 14.333Z" fill="#F8F8F8"/>
                                                    <path d="M15.6667 12.333H9.00008C8.81608 12.333 8.66675 12.1837 8.66675 11.9997C8.66675 11.8157 8.81608 11.6664 9.00008 11.6664H15.6667C15.8507 11.6664 16.0001 11.8157 16.0001 11.9997C16.0001 12.1837 15.8507 12.333 15.6667 12.333Z" fill="#F8F8F8"/>
                                                <path d="M15.6667 10.333H9.00008C8.81608 10.333 8.66675 10.1837 8.66675 9.99972C8.66675 9.81572 8.81608 9.66638 9.00008 9.66638H15.6667C15.8507 9.66638 16.0001 9.81572 16.0001 9.99972C16.0001 10.1837 15.8507 10.333 15.6667 10.333Z" fill="#F8F8F8"/>
                                            <path d="M15.6667 8.33305H9.00008C8.81608 8.33305 8.66675 8.18372 8.66675 7.99972C8.66675 7.81572 8.81608 7.66638 9.00008 7.66638H15.6667C15.8507 7.66638 16.0001 7.81572 16.0001 7.99972C16.0001 8.18372 15.8507 8.33305 15.6667 8.33305Z" fill="#F8F8F8"/>
                                        <path d="M15.6667 6.33305H9.00008C8.81608 6.33305 8.66675 6.18372 8.66675 5.99972C8.66675 5.81572 8.81608 5.66638 9.00008 5.66638H15.6667C15.8507 5.66638 16.0001 5.81505 16.0001 5.99972C16.0001 6.18438 15.8507 6.33305 15.6667 6.33305Z" fill="#F8F8F8"/>
                                    <path d="M15.6667 4.33305H9.00008C8.81608 4.33305 8.66675 4.18372 8.66675 3.99972C8.66675 3.81572 8.81608 3.66638 9.00008 3.66638H15.6667C15.8507 3.66638 16.0001 3.81505 16.0001 3.99972C16.0001 4.18438 15.8507 4.33305 15.6667 4.33305Z" fill="#F8F8F8"/>
                                </svg>
                                <div className="d-flex align-items-center">
                                    <p>Last updated time 09-Aug-2023 08:09 AM</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise ms-1" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-brightness-high ms-3" viewBox="0 0 16 16">
                                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                        </svg>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Header