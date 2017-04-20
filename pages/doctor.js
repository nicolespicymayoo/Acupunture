import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import mediaQuery from '../helpers/mediaQuery'

const Doctor = () => (
  <DoctorContainer id="doctor">
    <DoctorText>
      <SectionTitle>Meet the Doctor</SectionTitle>
      <img src="../static/jingjiang_small2.jpg"/>
      <p> Dr. Jing holds a bachelors degree in Chinese Traditional Medicine and Western Medicine from the University of Chengdu, one of the top five Traditional Chinese Medicine(TCM) Universities in China. Dr. Jing was a medical doctor at the “People Hospital of Chengdu" for over <b>32 years</b>. Jing is a National Board Certified acupuncturist and is licensed in NY and CT.  She has practiced acupuncture in United States for 10 years, and has been considered a recognized acupuncturist in CT and NY.</p>
   </DoctorText>
  </DoctorContainer>
)

export default Doctor


const DoctorContainer = styled.div`
  height: 455px;
  background: url('../static/jingjiang.jpg') no-repeat top left;
  background-size: cover;
  padding: 50px 0;  
  border-bottom: 1px dotted rgba(0,0,0,.3);
  border-top: 1px dotted rgba(0,0,0,.1);
  ${mediaQuery.tablet`
    background: none;
    display: table;
    margin: auto;
    padding: 40px 10px;
  `}
  
`


const DoctorText = styled.div`
  float: left;
  max-width: 380px;
  text-align: center;
  margin-left: 5%;
  margin-top: 25px;
  p{
    line-height: 1.8;
	  font-size: 1.06em;
    text-align: center;
  }
  img{
    margin: 0px auto 20px;
    width: 140px;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); 
    position: absolute;
    top: -9999px;
    left: -9999px;   
  }
  ${mediaQuery.tablet`
    float: none;
    margin: 25px auto; 
    text-align: center;
    img{position: initial;}
    p{line-height: 1.7;}
  `}
  ${mediaQuery.mobile`
    padding: 20px 25px;
    margin: 0 auto ;
  `}
`
