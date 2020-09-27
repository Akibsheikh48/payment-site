import React from 'react'
import HeroSection from '../HeroSection';
import Pricing from '../Pricing';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'

function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Pricing />
            <HeroSection {...homeObjFour} />
        </div>
    )
}

export default Home
