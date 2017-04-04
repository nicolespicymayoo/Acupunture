import React from 'react'
import SectionTitle from '../components/SectionTitle.js'
import styled from 'styled-components'

const Techniques = () => (
  <TechniquesContainer>
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
  border-bottom: 1px solid #fafafa;
`

const TechniquesList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin: 90px 10px 100px;
`

const TechniqueItem = styled.div`
  text-align: center;
  img{
      width: 85%;
      margin-bottom: 30px;
  }

  p{
    letter-spacing: .38px;
    font-size: 1.082em;
  }
`
// first image is larger than others
const Img1 = styled.img`
  width: 75% !important;  
`