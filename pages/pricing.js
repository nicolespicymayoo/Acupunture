import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'

const Pricing = () => (
  <PricingContainer>
		<SectionTitle>Our Pricing</SectionTitle>
			<PricingList>
				<PricingItem>
					<PricingTitle>Initial Visit</PricingTitle>
					<PricingSubtitle>
						One and half hours
					</PricingSubtitle>
					<PricingDescription>
						Dr. Jing will see you for an initial diagnosis and treatment which includes a discussion of your symptoms, a pulse and tongue examination and diagnostic acupressure.
					</PricingDescription>
					<Price>
						<h3>$170</h3>
						<p>per session</p>
					</Price>
				</PricingItem>

				<PricingItem>
					<PricingTitle>Regular Sessions</PricingTitle>
					<PricingSubtitle>One hour</PricingSubtitle>
					<PricingDescription>
						A subsequent session will be scheduled after your initial treatment. This includes
						an evaluation of your response to the initial treatment, 
						a second pulse and tongue examination,
						and a secondary acupuncture treatment.
					</PricingDescription>
					<Price>
						<h3>$98</h3>
						<p>per session</p>
					</Price>
				</PricingItem>

				<PricingItem>
					<PricingTitle>Maintenance</PricingTitle>
					<PricingSubtitle>10 Sessions Package</PricingSubtitle>
					<PricingDescription>
						Dr. Jing wil recommend a plan for follow-up maintenance. This can include having a once-a-month treatment to regulate your energy flow.
					</PricingDescription>
					<Price>
						<h3>$85</h3>
						<p>per session</p>
					</Price>
				</PricingItem>

			</PricingList>
	</PricingContainer>
)

export default Pricing


const PricingContainer = styled.div`
	padding: 80px;
	background-color: #fafafa;
`
const PricingList = styled.div`
	display: flex;
	justify-content: center;	
`

const PricingItem = styled.div`
	display: flex;
	flex-flow: row-wrap;
	flex-direction: column;
	text-align: center;
	margin: 35px 10px;
	padding: 50px 10px;
	border: 3px solid rgba(0,0,0,.1);
	border-radius: 3px;
`
const PricingTitle = styled.h3`
	font-size: 1.3em;
	font-weight: normal;
	margin: 0;
`
const PricingSubtitle = styled.p`
	margin: 0;
	color: #eba832;
	padding-top: 10px;
	font-size: .9em;
	letter-spacing: .34px;
`

const PricingDescription = styled.p`
	width: 230px;
	padding: 10px 25px 15px;
	line-height: 1.45;
	color: rgba(0,0,0,.6);
	font-size: .98em;
`

const Price = styled.div`
	vertical-align: baseline;
	margin-top: auto; //pushes to bottom
	bottom: 0;
	h3{
		font-size: 1.35em;
		font-weight: normal;
		margin: 0;

	}
	p{
		margin: 0;
		font-size: .8em;
		color: rgba(0,0,0,.6);
	}
`