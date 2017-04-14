import styled from 'styled-components'
import mediaQuery from '../pages/mediaQuery'

const SectionTitle = styled.h2`
	text-align: center;
  font-size: 1.7em;
  font-weight: 400;
  marging-top: 20px;
  margin-bottom: 30px;
  ${mediaQuery.tablet`font-size: 1.6em;`}
`

export default SectionTitle