import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Vlad</span></h1>
                <p>
                I just graduated the University and I'm looking for new oportunities. I am an open-mind Self-Employee with uplifted targets. I am providing services in Web and mobile Development. Are you new in the field and looking for openning a new bussines? Or even better, do you represent a company being a talent seaker? Either of them, let's have a talk. Feel free to navigate through my experience and portfolios.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/vlad-timofte/" className="icon i-linkedin" target="blank">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/VladTimofte" className="icon i-github" target="blank">
                        <GithubIcon />
                    </a>
                    <a href="https://wa.me/+40770746731" className="icon i-whatsapp" target="blank">
                        <WhatsAppIcon /> 
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                color: var(--primary-color);
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-whatsapp{
                color: green;
                &:hover{
                    border: 2px solid green;
                    color: green;
                }
            }
            .i-github{
                color: #5F4687;
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
