import React, { Component } from 'react'
import styled from 'styled-components'

export default class MenuPopover extends Component {
  render(){
    return(
      <MenuPopoverContainer>
        <li>Why Chinese Medicine</li>
        <li>What We Can Treat</li>
        <li>Our Techniques</li>
        <li>Meet the Doctor</li>
        <li>Testimonials</li>
        <li>Our Pricing</li>
        <li>Contact Us</li>
      </MenuPopoverContainer>
    )
  }
}

const MenuPopoverContainer = styled.div`
  position: fixed;
  margin-top: 55px;
  left: 20px;
  background-color: #fafafa;
  box-shadow: 2px 2px 2px #rgba(0,0,0,.06);
  border-radius: 3px;
  padding: 20px 5px;
  li{
    list-style: none;
    padding: 8px;
    &:hover{
      cursor: pointer;
    }
  }
`