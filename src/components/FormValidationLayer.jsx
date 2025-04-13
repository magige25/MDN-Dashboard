import React from 'react'
import InputCustomStyles from './child/InputCustomStyles.jsx'
import InputStatus from './child/InputStatus.jsx'

const FormValidationLayer = () => {
    return (
        <div className="row gy-4">

            {/* InputCustomStyles */}
            <InputCustomStyles />

            {/* InputStatus */}
            <InputStatus />

        </div>

    )
}

export default FormValidationLayer