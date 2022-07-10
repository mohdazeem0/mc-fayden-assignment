import React from 'react'
import { Row, Col } from 'react-bootstrap'

export const SecRight = () => {
    return (
        <div className='secRight'>
            <div>
                <h1>JONATHAN <br />SIMKHAI</h1>
                <p>Lurex Linen Viscose Jacket in Conchiglia</p>
                <p><b>$225</b></p>
            </div>

            <div style={{ }}>
                <div>
                    <p style={{ fontSize: "14px" }}><b>COLOR</b> CONCHIGLIA</p>
                    <div>
                        <img src="img/1.jpg" style={{ width: '16%', border: "2px solid black" }} alt="" />
                        <img src="img/1.jpg" style={{ width: '13%', border: "1px solid grey", marginLeft: "10px" }} alt="" />
                    </div>
                </div>

                <div style={{ marginTop: '30px' }}>
                    <Row>
                        <Col><p><b>SIZE</b> L</p></Col>
                        <Col><p style={{ float: 'right' }}><u>SIZE GUIDE</u></p></Col>
                    </Row>
                    <div className='size-buttons'>
                            <button>XS</button>
                            <button>S</button>
                            <button><strike>M</strike></button>
                            <button disabled style={{ backgroundColor:'black', color:'white' }}>L</button>    
                    </div>
                    <button style={{marginTop:'7px'}}> XL</button>
                </div>
                <br />
                <div>
                    <button className='add-bag'>ADD TO BAG ➝</button>
                </div>
                <br />
                <p>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
                <br />
                <p>Speak to a Personal Stylist CHAT NOW</p>
            </div>
        </div>
    )
}
