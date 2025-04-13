import React from 'react'
import NumberingWizard from './child/NumberingWizard.jsx'
import NumberingWizardWithLabel from './child/NumberingWizardWithLabel.jsx'
import OrderByFollowingStep from './child/OrderByFollowingStep.jsx'
import WizardWithBesideLabel from './child/WizardWithBesideLabel.jsx'

const WizardLayer = () => {
    return (
        <div className="row gy-4">

            {/* NumberingWizard */}
            <NumberingWizard />

            {/* NumberingWizardWithLabel */}
            <NumberingWizardWithLabel />

            {/* OrderByFollowingStep */}
            <OrderByFollowingStep />

            {/* WizardWithBesideLabel */}
            <WizardWithBesideLabel />

        </div>

    )
}

export default WizardLayer