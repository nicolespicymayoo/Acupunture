import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import Menu from './Menu.js'

export default class Navbar extends Component{
  state = {
    menuDisplayed: false
  }

  toggleMenu = () => {
    this.setState(state => ({
      menuDisplayed: !state.menuDisplayed
    }))
  }
  render(){
    return(
      <div>
        <NavbarContainer>
          <MenuButton
            onClick={this.toggleMenu}
          >
            <i className="fa fa-bars"></i>
            <span id="menu-button-text"> Menu</span>
          </MenuButton>
          <a href="tel:+1-914-843-1052"><div className="about"><i className="fa fa-phone"></i> 914-843-1052</div></a>
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
  height: 100px;
  display: flex;
  justify-content: space-between;
	color: #fff;
  padding: 20px;
  font-size: 1.15em;
`
const MenuButton = styled.div`
  &:hover{ cursor: pointer}
`

const Logo = styled.div`
  text-align: center;
`

const LogoIcon = styled.img`
  width: 70px;
`

const LogoText = styled.h3`
  text-transform: uppercase;
  font-weight: 100;
  font-size: .97em;
  letter-spacing: .5px;
  margin: 3px 0 0;
  color: #fff;
`