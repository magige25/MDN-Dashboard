import React from 'react'
import PricingPlanMultipleColor from './child/PricingPlanMultipleColor.jsx'
import SimplePricingPlan from './child/SimplePricingPlan.jsx'

const PricingLayer = () => {
    return (
        <>
            {/* PricingPlanMultipleColor */}
            <PricingPlanMultipleColor />


            {/* SimplePricingPlan */}
            <SimplePricingPlan />
        </>

    )
}

export default PricingLayer