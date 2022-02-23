import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import web from '../img/web.svg';
import design from '../img/design.svg';
import mobile from '../img/mobile.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={web} 
                        title={'Web Development'} 
                        paragraph={"Let's build your ideea together. Wether you desire a presentation website for your bussines, or you have a large scale project, let me simplify and implement your plans for you."}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={design} 
                            title={"Web Design"} 
                            paragraph={"if you already understand the importance of a soft, pleasing and efficient touch of a product, you will want to discover more of the complexity and in the same time, simplicity that my partners provide."}
                        />
                    </div>
                    <ServiceCard 
                        image={mobile} 
                        title={'Mobile Development'} 
                        paragraph={"Most of the time, people use their smartphones for plenty reasons. If you want to reach your clients by offering them the freedom of your product on their cell phones, let's build the right app."}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
