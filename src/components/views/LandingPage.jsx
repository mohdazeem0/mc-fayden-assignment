import React from 'react'
import TopNav from '../layout/TopNav'
import { ProductPage } from './ProductPage'

export const LandingPage = () => {
  return (
    <React.Fragment>
        <TopNav /><br />
        <ProductPage/>
    </React.Fragment>
  )
}
