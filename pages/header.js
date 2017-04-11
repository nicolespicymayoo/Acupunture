import React, { Component } from 'react'
import css from 'next/css'
import Navbar from './navbar'
import styled from 'styled-components'
import { media, sizes } from './MediaSizes' 

const Header = () => (
  <HeaderContainer>
    <Navbar />
    <HeaderText>
      <HeaderTitle>Your Health, Your Trust, Your Choice.</HeaderTitle>
      <HeaderSubtitle>
        <p>The most authentic traditional Chinese medical treatment</p>
        <p>in Stamford, CT and Harrison, NY.</p>
      </HeaderSubtitle>
      <a href="#contact">
        <Button>Make an Appointment</Button>
      </a>
    </HeaderText>
  </HeaderContainer>
)

export default Header


const HeaderContainer = styled.div`
  height: 530px;
	overflow: hidden;
	background: radial-gradient(center, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.32)), url('../static/stamford2.jpg');
  background-position: center bottom;
  background-size: cover; 
  padding-top: 30px;
  ${media.tablet`height: 500px;`}
  ${media.mobile`padding-top: 10px;`}
`

const HeaderText = styled.div`
  z-index: 9999;
  text-align: center;
  width: 800px;
  margin: auto;
  margin-top: 90px;
	max-width: 85%;
	color: #fff;
  h1: {
		text-align: center;
		letter-spacing: -.02em;
	}
  ${media.tablet`
      margin-top: 80px;  
  `}
  ${media.mobile`
      margin-top: 50px;
  `}
`
  const HeaderTitle = styled.h1`
    font-family: 'Montserrat';
    font-size: 2.7em;
    font-weight: 400;
    text-shadow: 2px 2px 10px rgba(0,0,0,.05);
    ${media.tablet`font-size: 2em;`}

`

 const HeaderSubtitle = styled.h3`
    padding-top: 20px;
    font-size: 1.25em;
    font-weight: 300;
    line-height: 1.7;
    text-shadow: 0 1px 5px rgba(0,0,0,.3);
    ${media.tablet`font-size: 1.15em;`}
`

 const Button = styled.button`
    margin-top: 40px;
    padding: 14px 26px;
		background-color: rgba(235,168,50,.95);
    color: #fff;
		border-radius: 4px;
		box-shadow: none;
		border: none;
		font-size: .95em;
    letter-spacing: .4px;
		&:hover{
			cursor: pointer;
			background-color: rgba(235,168,50,1);
		}
		&:focus{
			border: none;
      outline:0;
		}
    ${media.tablet`
      font-size: .89em;  
      letter-spacing: .42px;
    `}
`