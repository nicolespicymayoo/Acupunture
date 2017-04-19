import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import Menu from './Menu.js'
import mediaQuery from './mediaQuery'


const NavIcon = (props) => (
  <svg x="0px" y="0px"
	 width="26px" height="26px" viewBox="0 0 512 512" style={{fill: props.fill}}>
	<rect x="96" y="241" width="320" height="32"/>
	<rect x="96" y="145" width="320" height="32"/>
	<rect x="96" y="337" width="320" height="32"/>
</svg>
)

const PhoneIcon = (props) => (
  <svg x="0px" y="0px"
	 width="20px" height="20px" viewBox="0 0 512 512" style={{fill: props.fill}}>
    <path d="M415.9,335.5c-14.6-15-56.1-43.1-83.3-43.1c-6.3,0-11.8,1.4-16.3,4.3c-13.3,8.5-23.9,15.1-29,15.1c-2.8,0-5.8-2.5-12.4-8.2
      l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6c-6.2-6.4-10.7-11-26.6-29l-0.7-0.8
      c-7.6-8.6-12.6-14.2-12.9-18.3c-0.3-4,3.2-10.5,12.1-22.6c10.8-14.6,11.2-32.6,1.3-53.5c-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2
      c-9.8-12-21.2-18-33.9-18c-14.1,0-25.8,7.6-32,11.6c-0.5,0.3-1,0.7-1.5,1c-13.9,8.8-24,20.9-27.8,33.2c-5.7,18.5-9.5,42.5,17.8,92.4
      c23.6,43.2,45,72.2,79,107.1c32,32.8,46.2,43.4,78,66.4c35.4,25.6,69.4,40.3,93.2,40.3c22.1,0,39.5,0,64.3-29.9
      C442.3,370.8,431.5,351.6,415.9,335.5z"/>
  </svg>
)

export default class Navbar extends Component{

  componentDidMount(){
    window.addEventListener('scroll', this.changeNavTextColor)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeNavTextColor)
  }

  state = {
    menuDisplayed: false,
    navTextColor: 'white'
  }

  toggleMenu = () => {
    this.setState(state => ({
      menuDisplayed: !state.menuDisplayed
    }))
  }

  changeNavTextColor = () => {
   let position = document.body.scrollTop
   if(position < 490){
     this.setState((state) => ({
        navTextColor: 'white'
     }))
   }else{
     this.setState((state) => ({
        navTextColor: 'black',
     }))
   }
  }

  render(){
    return(
      <div>
        <NavbarContainer 
          navTextColor={this.state.navTextColor}
        >
          <MenuButton 
            onClick={this.toggleMenu}
            navTextColor={this.state.navTextColor}
          >
            <NavIcon fill={this.state.navTextColor}/>
            <p>Menu</p>
          </MenuButton>
          <PhoneNumber navTextColor={this.state.navTextColor}>
            <PhoneIcon 
              fill={this.state.navTextColor}
            /><a href="tel:+1-914-843-1052"> 914-843-1052</a>
          </PhoneNumber>
        </NavbarContainer>
          <Menu 
            menuDisplayed={this.state.menuDisplayed} 
            toggleMenu={this.toggleMenu}
          />
        <Logo>
          <LogoIcon src="../static/logo.png"/>
          <LogoText>Jing Jiang Acupuncture & Herb Clinic</LogoText>
        </Logo>
      </div>
    )
  }
}


const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
	color: ${props => props.navTextColor};
  padding: 0px;
  font-size: 1.15em;
`
const MenuButton = styled.div`
  color: ${props => props.navTextColor};
  margin: 40px;
  p{
    display: inline-block;
    vertical-align: top;
    font-size: .9em;
    letter-spacing: .5px;
    margin: 3px 0 0;
    padding-left: 3px;
    color: ${props => props.navTextColor};
    ${mediaQuery.tablet`display: none;`}
  }
  &:hover{ 
    cursor: pointer 
  }
  ${mediaQuery.mobile`margin: 20px`}
`

const PhoneNumber = styled.div`
  margin: 40px;
  color: ${props => props.navTextColor};
  a{
    text-decoration: none;
    font-size: .9em;
    letter-spacing: .5px;
    margin: 3px 0 0;
    color: ${props => props.navTextColor};
    vertical-align: top;
  }
  ${mediaQuery.tablet`display: none;`}
`

const Logo = styled.div`
  text-align: center;
  padding-top: 30px;
  ${mediaQuery.mobile`
    padding-top: 20px;
    margin: 10px auto 0;
    width: 200px;
  `}
`

const LogoIcon = styled.img`
  width: 70px;
  ${mediaQuery.mobile`width: 60px;`}
`

const LogoText = styled.h3`
  text-transform: uppercase;
  font-weight: 100;
  font-size: .97em;
  letter-spacing: .5px;
  margin: 3px 0 0;
  color: #fff;
  ${mediaQuery.mobile`
    // font-size: .9em;
    line-height: 1.5;
  `}
`