import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle.js'
import mediaQuery from '../helpers/mediaQuery'

const Why = () => (
  <WhyContainer id="why">
		<WhyText>
			<SectionTitle>
      	Why Chinese Medicine?
   		</SectionTitle>
			<p>Traditional Chinese medicine is a time-honored practice that has formed over thousands of years through experience and culminating knowledge about healing the human body. All the techniques and philosophies of traditional Chinese medicine are far from mere tradition. They are a system of diagnosis and treatment that has helped countless people throughout the many centuries of its practice. </p>
		</WhyText>
	</WhyContainer>
)

export default Why


const WhyContainer = styled.div`
	background: radial-gradient(left, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8)), url('../static/medicine4.jpg') no-repeat right;
	background-size: cover;
	height: 450px;
	text-align: center;
	padding: 50px 30px;
	${mediaQuery.tablet`
		margin: auto;
		background: radial-gradient(left, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.95)), url('../static/medicine4.jpg') no-repeat right;
	`}
		${mediaQuery.mobile`
		height: 400px;
	`}
`

const WhyText = styled.div`
	clear: both;
	float: right;
	display: inline-block;
	margin-top: 30px;
	margin-right: 2%;
	max-width: 340px;
	p{
		float: right;
		line-height: 1.7;
		font-size: 1.1em;
    margin: 0;
	}
	&:after{
		clear: both;
	}
	${mediaQuery.tablet`
		display: table;
		width: 100%;
		float: none;
		margin-right: 0;
		margin: auto;
		text-align: center;
	`}
`