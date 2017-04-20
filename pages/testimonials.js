import React, { Component } from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import mediaQuery from '../helpers/mediaQuery'

const testimonials = [
	{
		quote: "Sessions with Dr. Jiang are quiet, restful and private. She gives each patient one-on-one attention and never leaves you alone! I have received acupuncture from 4 other doctors over the years and Dr. Jiang is by far the most professional and knowledgeable doctor I have met. I recommend her without any reservation.",
		name: "Kim Regan",
		location: "Rye, NY"
	},
	{
		quote: "I came to Dr. Jing with terrible lower back pain. I had a tremendous muscle cramp all across my lower back and at times could not walk without a cane. After one treatment, I could move freely again. With repeated treatments, my ability to resist re-injuring my back slowly increased, and any future incidents were much more mild. I have recommended Dr. Jing to friends and co-workers. She is very pleasant, very knowledgeable and very dedicated to her patients.",
		name: "Kenneth Citarella",
		location: "White Plains, NY"
	},
	{
		quote: "Dr. Jiang's treatment is really special. She does not just try to relieve the muscle pain, which most other docs do. She adopts her 20+ years of working experience in such area, develops her own treatment method. It is really great and helpful.",
		name: "Tiger",
		location: "Stamford, CT"
	}
]

export default class Testimonials extends Component {

	state={
		testimonialIndex: 0
	}

	componentDidMount(){
		 this.loopTestimonials()
	}

	loopTestimonials = () => {
		setInterval( () => {
			if(this.state.testimonialIndex >= testimonials.length -1){
				this.setState({
					testimonialIndex: 0
				})
			}else{
				this.setState({
					testimonialIndex: this.state.testimonialIndex +1
				})
			}
		}, 15000)
	}

	render(){
		return(
			<TestimonialsContainer id="testimonials">
    		<SectionTitle>
      		What Our Patients Say...
    		</SectionTitle>
				
				<Testimonial>
					<Quote>
						"
						{testimonials[this.state.testimonialIndex].quote}
						"
					</Quote>
					<PatientName>
						- {testimonials[this.state.testimonialIndex].name}
					</PatientName>
					<Location>
						{testimonials[this.state.testimonialIndex].location}
					</Location>
				</Testimonial>
 			</TestimonialsContainer>
		)
	}
}
  

const TestimonialsContainer = styled.div`
	padding: 70px 0 30px;	
	${mediaQuery.mobile`
		display: table;
		padding-top: 40px; 
		font-size: 1.1em
	`}
`

const Testimonial = styled.div`;
	margin: 35px auto 0;
	padding: 0 20px;
	max-width: 450px;
	text-align: center;
`

const Quote = styled.div`
	font-size: 1.144em;
	line-height: 1.7;
	font-family: 'Lora';
		${mediaQuery.mobile`
		font-size: 1.1em; 
		margin: 20px 0;
		padding: 0 15px;
		line-height: 1.6;
	`}
`

const PatientName = styled.div`
	font-size: 1.1rem;
	margin-top: 30px;
`

const Location = styled.div`
	margin-top: 5px;
	color: #E1A030;
	// font-size: .9em;
	margin-bottom: 40px;
`