import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2020 - Present'} 
                        title={'Web Developer'}
                        subTitle={'Self Employee'}
                        text={'My role is to create diferent types of websites in Wordpress mostly. Clients are seeking my services, in order to introduce their new product or series of services in the marketplace. In other words, I am personalizing the websites and make them as much as faster, responsive and accesible with the aim of profitability.'} 
                    />
                    <ResumeItem 
                        year={'2020 - Present'} 
                        title={'Mobile Developer'}
                        subTitle={'Self Employee'}
                        text={'I was able to cooperate with an e-commerce online store. Despite the fact that the site was already built in wordpress, we needed to adapt it to a mobile app. Using flutter we have built the perfect match. Clients may already have a running bussines and a website, but most of the time, are seeking for a mobile app.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2018 - 2021'} 
                        title={'Economic Informatics'}
                        subTitle={'Emanuel University Of Oradea'}
                        text={'I graduated Emanue University with strong knoledge in Marketing gaining technical skills. For 3 Years i was able to build my character and the proffesional part of me. Passion, Integrity and Excelence are the 3 words that University reflects.'} 
                    />
                    <ResumeItem 
                        year={'2015 - 2018'} 
                        title={'High School'}
                        subTitle={'3rd General High School of Piraeus'}
                        text={'I finished high school in Grece were i grew up most time of my childhood. I learned and lived along the Greek community and tradition. Greek is my native language. As i finished my studies, i obtained strong knowlede in the economic field'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
