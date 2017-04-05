import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

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
          <a href="#why">Why Chinese Medicine</a>
          <a href="#treatments">What We Can Treat</a>
          <a href="#techniques">Our Techniques</a>
          <a href="#doctor">Meet the Doctor</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Our Pricing</a>
          <a href="#contact">Contact Us</a>
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