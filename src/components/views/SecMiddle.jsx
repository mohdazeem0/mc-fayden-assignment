import React from 'react'
import { Row, Col} from 'react-bootstrap'

export const SecMiddle = () => {
  return (
    <div  className='secMid' >
        <Row>
            <img src="img/1.jpg" alt="" style={{width :'100%'}} />
        </Row>
        <Row>
            <Col><img src="img/2.jpg" alt="" style={{width :'100%'}} /></Col>
            <Col><img src="img/3.jpg" alt="" style={{width :'100%'}} /></Col>
        </Row>
        <Row>
            <img src="img/5.jpg" alt="" />
        </Row>
        <Row>
            <img src="img/4.jpg" alt="" />
        </Row>
    </div>
  )
}
