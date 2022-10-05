import "./zro_header.css"
import styled from "styled-components"
export default function ZroHeader(){
    return(
        <MainMenu id="MainMenu">
            <Zrologo id="Zrologo">
                <img src="zro_photos/logo.png">

                </img>
            </Zrologo>
            <MenuBar id="MenuBar">
                <li><a>Our servises</a></li>
                <li><a>Pricing</a></li>
                <li><a>Contactus</a></li>
                <li><a>join</a></li>
                <li><a>Sign in</a></li>
            </MenuBar>
            <Signup id="Signup">
                Sign up
            </Signup>
        </MainMenu>

        
    )
}

const MainMenu=styled.div``
const Zrologo=styled.div``
const MenuBar=styled.ul``
const Signup=styled.button``