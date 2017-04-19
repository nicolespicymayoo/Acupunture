import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle.js'
import mediaQuery from './mediaQuery'

const Treatments = () => (
  <TreatmentsContainer id="treatments">
	<SectionTitle>What We Can Help You With</SectionTitle>
	<TreatmentsList>
		<TreatmentItem>
			<TreatmentTitle>Pain Relief</TreatmentTitle>
			<li>Arthritis</li>
			<li>Back Pain</li>
      <li>Sciatica</li>
      <li>Shoulder Pain</li>
			<li>Headaches/Migraines</li>
		</TreatmentItem>
		<TreatmentItem>
			<TreatmentTitle>Women's Health</TreatmentTitle>
			<li>Infertility</li>
			<li>Menopause</li>
      <li>Depression</li>
			<li>Ovarian Cysts</li>
		</TreatmentItem>
		<TreatmentItem>
			<TreatmentTitle>Immunity Disorders</TreatmentTitle>
			<li>Allergies</li>
			<li>Asthma</li>
			<li>Skin Disorders</li>
		</TreatmentItem>
		<TreatmentItem>
			<TreatmentTitle>Others</TreatmentTitle>
			<li>Facial Lift</li>
			<li>Smoking Cessation</li>
      <li>Cancer Side Effect Relief</li>
		</TreatmentItem>
	  </TreatmentsList>
	</TreatmentsContainer>
)

export default Treatments

const TreatmentsContainer = styled.div`
	padding: 70px 40px 80px;
	background-color: #fafafa;
	h2{
		text-align: center;
	}
`
const TreatmentsList = styled.div`
	margin: 0 auto;
	text-align: center;
`

const TreatmentItem = styled.div`
	display: inline-block;
	vertical-align: top;
	text-align: center;
	margin: 30px 40px;
  li{
    list-style: none;
    line-height: 1.63;
    font-size: 1.03em;
    padding-top: 8px;
  }
	${mediaQuery.mobile`
		li{
			line-height: 1.5;
			font-size: 1.075em;
		}
	`}
`

const TreatmentTitle = styled.h3`
	text-transform: uppercase;
	font-size: .9em;
  letter-spacing: .6px;
  color: #E1A030;
  padding-bottom: 15px;
	vertical-align: bottom;
`