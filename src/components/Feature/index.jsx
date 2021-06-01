import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElement';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Ramen of the Day</h1>
            <h3>Karaage Pork Original</h3>
            <p>Sea salt, 4pc karaage, seasoned egg, nori, scallions for $10.45</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
