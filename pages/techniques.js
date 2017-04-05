import React from 'react'
import SectionTitle from '../components/SectionTitle.js'
import styled from 'styled-components'

const Techniques = () => (
  <TechniquesContainer id="techniques">
		<SectionTitle>Our Techniques</SectionTitle>
    <TechniquesList>
      <TechniqueItem>
        <Img1 src="../static/icons/acupuncture.png"/>
        <p>Acupuncture</p>
      </TechniqueItem>
      <TechniqueItem>
        <img src="../static/icons/moxa.png"/>
        <p>Moxa</p>
      </TechniqueItem>
      <TechniqueItem>
        <img src="../static/icons/cupping.png"/>
        <p>Cupping</p>
      </TechniqueItem>
      <TechniqueItem>
        <img src="../static/icons/gua-sha.png"/>
        <p>Gua Sha</p>
      </TechniqueItem>
      <TechniqueItem>
        <img src="../static/icons/herbal.png"/>
        <p>Herbs</p>
      </TechniqueItem>
    </TechniquesList>
	</TechniquesContainer>
)

export default Techniques

const TechniquesContainer = styled.div`
	padding: 80px;
`

const TechniquesList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin: 90px 70px 100px;
`

const TechniqueItem = styled.div`
  text-align: center;
  img{
      width: 80%;
      margin-bottom: 30px;
  }

  p{
    letter-spacing: .38px;
    font-size: 1.082em;
  }
`
// first image is larger than others
const Img1 = styled.img`
  width: 70% !important;  
`