import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import mediaQuery from '../helpers/mediaQuery'

const PhoneIcon = () => (
  <svg x="0px" y="0px"
	 width="20px" height="20px" viewBox="0 0 512 512" style={{fill: 'black', verticalAlign: 'top'}}>
    <path d="M415.9,335.5c-14.6-15-56.1-43.1-83.3-43.1c-6.3,0-11.8,1.4-16.3,4.3c-13.3,8.5-23.9,15.1-29,15.1c-2.8,0-5.8-2.5-12.4-8.2
      l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6c-6.2-6.4-10.7-11-26.6-29l-0.7-0.8
      c-7.6-8.6-12.6-14.2-12.9-18.3c-0.3-4,3.2-10.5,12.1-22.6c10.8-14.6,11.2-32.6,1.3-53.5c-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2
      c-9.8-12-21.2-18-33.9-18c-14.1,0-25.8,7.6-32,11.6c-0.5,0.3-1,0.7-1.5,1c-13.9,8.8-24,20.9-27.8,33.2c-5.7,18.5-9.5,42.5,17.8,92.4
      c23.6,43.2,45,72.2,79,107.1c32,32.8,46.2,43.4,78,66.4c35.4,25.6,69.4,40.3,93.2,40.3c22.1,0,39.5,0,64.3-29.9
      C442.3,370.8,431.5,351.6,415.9,335.5z"/>
  </svg>
)


export default class Menu extends Component {
  static propTypes = {
    menuDisplayed: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
  }
  
  render(){
    return(
      <MenuContainer 
        menuDisplayed={this.props.menuDisplayed}
        toggleMenu={this.props.toggleMenu}
      >
        <Logo>
          <img src="../static/logo.png"/>
        </Logo>
        <ExitButton onClick={this.props.toggleMenu}>
          ✕
        </ExitButton>
        <MenuItems>
          <a href="#why" onClick={this.props.toggleMenu}>Why Chinese Medicine</a>
          <a href="#treatments" onClick={this.props.toggleMenu}>What We Can Treat</a>
          <a href="#techniques" onClick={this.props.toggleMenu}>Our Techniques</a>
          <a href="#doctor" onClick={this.props.toggleMenu}>Meet the Doctor</a>
          <a href="#testimonials" onClick={this.props.toggleMenu}>Testimonials</a>
          <a href="#pricing" onClick={this.props.toggleMenu}>Our Pricing</a>
          <a href="#contact" onClick={this.props.toggleMenu}>Contact Us</a>
          <PhoneNumber>
            <a href="tel:+1-914-843-1052"><PhoneIcon /> 914-843-1052</a>
          </PhoneNumber>
        </MenuItems>
      </MenuContainer>
    )
  }
}

const MenuContainer = styled.div`
  visibility: ${props => props.menuDisplayed ? `visible` : `hidden`}
  position: fixed;
  top: 0;
  height: 100vh;
	left: -300px;
	z-index: 9999;
  width: 300px;
  left: ${props => props.menuDisplayed ? `0px` : `-300px`}
  padding-top: 20px;
  background-color: #fff;
	color: black;
  ${mediaQuery.mobile`
    width: 100%;
    height: 100vh;
  `}
`

const MenuItems = styled.ul`
  padding: 0;
  list-style-type: none;
  margin-top: 26px;
  a{
    display: block;
    padding: 14px 0px;
    padding-left: 45px;
    text-decoration: none;
    color: black;
    font-size: .96em;
    a:visited {
      text-decoration: none;
    }
    &:hover{
      background: #E1A030;
    }
  }
  ${mediaQuery.mobile`
    text-align: center;
    a{
      padding: 18px 0;
      padding-left: 0;
    }
  `}
 
`

const ExitButton = styled.div`
  position: absolute;
  float: right;
  right: 20px;
  top: 22px;
  font-size: 1.3em;
  color: rgba(0,0,0,.16);
  &:hover{
    cursor: pointer;
  }
`

const Logo = styled.div`
  text-align: center;
  margin: 5px auto 0px;
  img{
    width: 50px;
  }
`

const PhoneNumber = styled.div`
  a{
    text-decoration: none;
    letter-spacing: .5px;
  }
`