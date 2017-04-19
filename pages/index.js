import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './header'
import Why from './why'
import Treatments from './treatments'
import Techniques from './techniques'
import Doctor from './doctor'
import Pricing from './pricing'
import Testimonials from './testimonials'
import Contact from './contact'
import mediaQuery from './mediaQuery'

export default () => (
  <Home>
    <Header />
    <Why />
    <Treatments />
    <Techniques />
    <Doctor />
    <Pricing />
    <Testimonials />
    <Contact />
  </Home>
)

const Home = styled.div`
  font-family: 'Lato';
  font-size: 1em;
  letter-spacing: .2px;
  margin: auto;
  width: 100%;
  ${mediaQuery.mobile`font-size: 15px;`}

`