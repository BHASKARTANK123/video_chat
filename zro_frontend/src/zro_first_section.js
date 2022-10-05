import "./zro_first_section.css"
import styled from "styled-components"
export default function ZroFirstSection(){
    return(
        <FirstSection id="FirstSection">
            <LeftSection id="LeftSection">
                <Heading id="Heading">
                    Let's connect together
                </Heading>
                <Content id="Content">
                     Biscuit chupa chups wafer shortbread tootsie roll biscuit halvah dragée. Brownie toffee pudding chocolate bar liquorice dessert. Pie marzipan chocolate bar cotton candy tiramisu. S
                </Content>
                <StartMeetingButton id="StartMeetingButton">
                    Start Meeting  &#8594;
                </StartMeetingButton>

            </LeftSection>
            <RightSection id="RightSection">
                <img src="zro_photos/firstsectionphoto.png">
                </img>
            </RightSection>
        </FirstSection>
    )
}

const FirstSection=styled.div``
const LeftSection=styled.div``
const Heading=styled.h1``
const Content=styled.p``
const StartMeetingButton=styled.button``
const RightSection=styled.div``


