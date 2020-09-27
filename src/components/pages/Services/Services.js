import React from 'react'
import HeroSection from '../HeroSection'
import Pricing from '../Pricing'
import { homeObjOne } from './Data'

function Services() {
    return (
        <div>
            <Pricing />
            <HeroSection {...homeObjOne} />
        </div>
    )
}

export default Services
