import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import mediaQuery from '../helpers/mediaQuery'

const Contact = () => (
  <ContactContainer id="contact">
		<ContactTitle>
			<SectionTitlePadding>
        Make an Appointment
      </SectionTitlePadding>
			<SectionSubtitle>
        Call or Text: <a href="tel:+1-914-843-1052">914-843-1052</a>
      </SectionSubtitle>
		</ContactTitle>

		<ContactItemCT>
			<h2>Stamford Clinic</h2>
			<ContactDay>
        Monday, Wednesday, Thursday
      </ContactDay>
			<ContactAdress>
				1250 Summer Street, Suite 304<br></br>
        Stamford, CT 06905
			</ContactAdress>
		</ContactItemCT>
		<ContactItemNY>
			<h2>New York Clinic</h2>
			<ContactDay>Tuesday and Friday</ContactDay>
			<ContactAdress>
				600 Mamaroneck Ave, Suite 427<br></br>
        Harrison, NY 10528
			</ContactAdress>
		</ContactItemNY>
	</ContactContainer>
)

export default Contact

const ContactContainer = styled.div`
	padding:0;
  position: relative;
`

const ContactTitle = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
`

const SectionTitlePadding = styled(SectionTitle)`
	margin-top: 40px;
	margin-bottom: 0;
  font-size: 1.7em;
	${mediaQuery.mobile`
		margin-top: 30px;
	`}
`

const SectionSubtitle = styled.h2`
	font-size: 1.2rem;
	font-weight: 400;
	text-align: center;
  margin: 0;
  margin-top: 10px;
	a{
		color: #E1A030
		text-decoration: none;
  }
`

const ContactItem = styled.div`
	width: 50%;
	display: inline-block;
	text-align: center;
	padding: 200px 0 100px;
	background-size: cover;
	h2{
	margin: 0;
	}
	p{
		font-size: 1.15em;
		margin: 6px 0 16px;
	}
	${mediaQuery.btwnTabletAndMobile`
		width: 100%;
		display: block;
		padding: 180px 0 40px;
	`}
`

const ContactItemCT = styled(ContactItem)`
	background: radial-gradient(center, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1)), url('../static/stamford3.jpg') no-repeat left;
		${mediaQuery.mobile`
			padding: 200px 0 30px;
		`}
`

const ContactItemNY = styled(ContactItem)`
	background: radial-gradient(center, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1)), url('../static/newyork.jpg') no-repeat left;
	${mediaQuery.mobile`
		padding: 50px 0;
	`}
`

const ContactDay = styled.p`
	color: #E1A030;
	font-size: 1em;
	letter-spacing: .3px;
`

const ContactAdress = styled.p`
	line-height: 1.52;
`