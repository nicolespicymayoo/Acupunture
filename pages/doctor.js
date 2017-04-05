import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'

const Doctor = () => (
  <DoctorContainer id="doctor">
    <DoctorText>
      <SectionTitle>Meet the Doctor</SectionTitle>
      <p> Dr. Jing holds a bachelors degree in Chinese Traditional Medicine and Western Medicine from the University of Chengdu, one of the top five Traditional Chinese Medicine(TCM) Universities in China. Dr. Jing was a medical doctor at the “People Hospital of Chengdu" for over <b>32 years</b>. Jing is a National Board Certified acupuncturist and is licensed in NY and CT.  She has practiced acupuncture in United States for 10 years, and has been considered a recognized acupuncturist in CT and NY.</p>
   </DoctorText>
  </DoctorContainer>
)

export default Doctor


const DoctorContainer = styled.div`
  background: url('../static/jingjiang.jpg') no-repeat top left;
  background-size: cover;
  height: 450px;
  padding: 30px 0;  
  border-bottom: 1px dotted rgba(0,0,0,.3);
  border-top: 1px dotted rgba(0,0,0,.1);
`

const DoctorText = styled.div`
  float: left;
  width: 380px;
  text-align: center;
  margin-left: 5%;
  p{
    line-height: 1.7;
	  font-size: 1.06em;
  }
`