import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import partners from '../data/partners';
import {MainLayout, InnerLayout} from '../styles/Layouts';

function PartnersPage() {
    return (
        <MainLayout>
            <PartnersStyled>
            <Title title={'Partners'} span={'Partners'} />
                <InnerLayout className={'partners'}>
                    {
                        partners.map((partners)=>{
                            return <div key={partners.id} className={'partners-item'}>
                                <div className="image">
                                <a href={partners.link} target="blank">
                                    <img src={partners.image} alt="" />
                                    </a>
                                </div>
                                <div className="nameOfPartner">
                                    <a href={partners.link}>
                                        {partners.name}
                                    </a>
                                </div>
                                <div className="skillOfPartner">
                                    <a href={partners.link}>
                                        {partners.skill}
                                    </a>
                                </div>
                            </div>
                        })
                    }
                </InnerLayout>
            </PartnersStyled>
        </MainLayout>
    )
}

const PartnersStyled = styled.div`
    .partners{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
        }
        .partners-item{
            background-color: var(--background-dark-grey);
            padding: 1rem 1rem;
        }
        .image{
            width: 100%;
            overflow: hidden;
            padding-bottom: .5rem;
            img{
                width: 100%;
                height: 90%;
                max-width: 350px;
                object-fit: cover;
                transition: all .4s ease-in-out;
                border-radius: 50%;
                display: block;
                margin-left: auto;
                margin-right: auto;
                &:hover{
                    cursor: pointer;
                    transform: rotate(3deg) scale(1.1);
                }
            }
        }

        .nameOfPartner{
            text-align: center;
            a{
                font-size: 1.8rem;
                padding: 2rem 0;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
        .skillOfPartner{
            text-align: center;
            font-style: italic;
            a{
                font-size: 1.2rem;
                padding: 2rem 0;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
    }
`;

export default PartnersPage
