import React from 'react';
import {HeroContent, HeroItems, HeroH1, HeroP, HeroContainer} from '../components/AboutElements';

const About = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
            
            <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Poslastičarnica Čokolači</HeroH1>
                    <HeroP>
                    Nasa mala proizvodnja nastala je kao rezultat ljubavi prema cokoladi i  dugogodišnje posvećenosti
                    pronalaženju savršenog spoja sastojaka koji nikoga ne ostavlja ravnodušnim.
                    Naše poznate čokolače pravimo sa uživanjem i sa puno čokolade i još više ljubavi.
                            
                    </HeroP>
                </HeroItems>
            </HeroContent>
            </HeroContainer>
            
        </div>
    )
}

export default About
