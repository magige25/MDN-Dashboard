import React from 'react'
import VerticalInputForm from './child/VerticalInputForm.jsx'
import InputFormWithIcons from './child/InputFormWithIcons.jsx'
import HorizontalInputForm from './child/HorizontalInputForm.jsx'
import HorizontalInputFormWithIcons from './child/HorizontalInputFormWithIcons.jsx'

const FormLayoutLayer = () => {
    return (
        <div className="row gy-4">

            {/* VerticalInputForm */}
            <VerticalInputForm />

            {/* InputFormWithIcons */}
            <InputFormWithIcons />

            {/* HorizontalInputForm */}
            <HorizontalInputForm />

            {/* HorizontalInputFormWithIcons */}
            <HorizontalInputFormWithIcons />

        </div>

    )
}

export default FormLayoutLayer