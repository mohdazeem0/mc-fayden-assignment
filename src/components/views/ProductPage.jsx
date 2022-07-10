import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { SecBottom } from './SecBottom'
import { SecLeft } from './SecLeft'
import { SecMiddle } from './SecMiddle'
import { SecRight } from './SecRight'

export const ProductPage = () => {
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col> <SecLeft/> </Col>
          <Col xs={5}> <SecMiddle/></Col>
          <Col> <SecRight/> </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}><SecBottom/></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}
