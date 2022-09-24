import React from 'react'
import styled from 'styled-components'
import ErrorComp from '../components/ErrorComp'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const error=styled.div`
    text-align: center;
    font-size: 100px;
    margin-top: 200px;

`


function ErrorPage() {
  return (
    <div>
    <ErrorComp/>
    </div>

  )
}

export default ErrorPage