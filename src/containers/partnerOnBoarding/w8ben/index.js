import React from 'react'
import Header from '../../../components/common/header'
import Footer from '../../../components/common/footer'
import ProgressStep from './../progressStep'
import W8BEN from './w8ben'

function W8BENRender () {
  return (
    <>
      <Header />
      <ProgressStep handleNext={2} />
      <W8BEN />
      <Footer />
    </>
  )
}

export default W8BENRender
