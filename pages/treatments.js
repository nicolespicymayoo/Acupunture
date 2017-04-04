import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle.js'

const Treatments = () => (
  <TreatmentsContainer>
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
	padding: 80px 40px 90px;
	background-color: #fafafa;
	h2{
		text-align: center;}
`
const TreatmentsList = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
`

const TreatmentItem = styled.div`
	text-align: center;
	margin: 40px;
  li{
    list-style: none;
    line-height: 1.8;
    font-size: 1.07em;
    padding-top: 4px;
  }
`

const TreatmentTitle = styled.h3`
  font-size: 1.082em;
  letter-spacing: .5px;
  color: #E1A030;
  padding-bottom: 3px;
`