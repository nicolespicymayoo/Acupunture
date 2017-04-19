import React from 'react'
import SectionTitle from '../components/SectionTitle.js'
import styled from 'styled-components'
import mediaQuery from './mediaQuery'

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
	padding: 60px;
  ${mediaQuery.mobile`padding: 50px 10px`}
`

const TechniquesList = styled.div`
  max-width: 1100px;
  margin: 80px auto 0;
  text-align: center;
  ${mediaQuery.mobile`margin: 50px auto 0;`}
`

const TechniqueItem = styled.div`
  display: inline-block;
  text-align: center;
  vertical-align: bottom;
  margin: 35px;
  img{
    width: 80%;
    margin-bottom: 30px;
  }

  p{
    letter-spacing: .38px;
    font-size: 1.095em;
  }
  ${mediaQuery.mobile` 
    img{width: 76%;}
  `}
`
// first image is larger than others
const Img1 = styled.img`
  width: 68% !important; 
  ${mediaQuery.mobile` 
    width: 65%;
  `} 
`