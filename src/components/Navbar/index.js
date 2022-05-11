import React  from "react";
import { Link } from "react-router-dom";
import {NavbarSection , Logo , LogoText , List , Item , Archive } from './style'


const Navbar = () =>{
    return(
      <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText> Ultra Profile </LogoText>
                </Logo>
                
                <input className="in_check" type="checkbox" id="nav" />
                <label className="image_lab" for="nav"></label>
                
                <List>

                    <Item><Link className="link" to="/" >Home</Link></Item>
                    <Item><Archive >Work</Archive></Item>
                    <Item><Archive >Portfolio</Archive></Item>
                    <Item><Archive >Resume</Archive></Item>
                    <Item><Archive >About</Archive></Item>
                    <Item><Link className="link" to="/contact">Contact</Link></Item>
                
                </List>
                
            </div>
            
        </NavbarSection>       
    )
}
export default Navbar;