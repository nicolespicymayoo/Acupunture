import React, { Component } from 'react'
import css from 'next/css'
import Navbar from './navbar'
import styled from 'styled-components'

const Header = () => (
  <HeaderContainer>
    <Navbar />
    <HeaderText>
      <HeaderTitle>Your Health, Your Trust, Your Choice.</HeaderTitle>
      <HeaderSubtitle>
        <p>The most authentic traditional Chinese medical treatment</p>
        <p>in Stamford, CT and Harrison, NY.</p>
      </HeaderSubtitle>
      <Button>Make an Appointment</Button>
    </HeaderText>
  </HeaderContainer>
)

export default Header


const HeaderContainer = styled.div`
  height: 530px;
	overflow: hidden;
	background: radial-gradient(center, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.32)), url('../static/stamford2.jpg');
  background-position: center bottom;
  background-size: cover; 
  padding-top: 30px;
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
`

  const HeaderTitle = styled.h1`
    font-family: 'Montserrat';
    font-size: 2.7em;
    font-weight: 400;
    text-shadow: 2px 2px 10px rgba(0,0,0,.05);
`

 const HeaderSubtitle = styled.h3`
    font-size: 1.25em;
    font-weight: 300;
    line-height: .7;
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
		&:hover{
			cursor: pointer;
			background-color: rgba(235,168,50,1);
		}
		&:focus{
			border: none;
		}
`