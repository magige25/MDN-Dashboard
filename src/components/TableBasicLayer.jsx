import React from 'react'
import DefaultTable from './child/DefaultTable.jsx'
import BorderlessTables from './child/BorderlessTables.jsx'
import BorderedTables from './child/BorderedTables.jsx'
import StripedRows from './child/StripedRows.jsx'
import StripedRowsTwo from './child/StripedRowsTwo.jsx'
import TablesBorderColors from './child/TablesBorderColors.jsx'
import TablesBorderColorsTwo from './child/TablesBorderColorsTwo.jsx'
import TablesBorderColorsThree from './child/TablesBorderColorsThree.jsx'

const TableBasicLayer = () => {
    return (
        <div className="row gy-4">

            {/* DefaultTable */}
            <DefaultTable />

            {/* BorderlessTables */}
            <BorderlessTables />

            {/* BorderedTables */}
            <BorderedTables />

            {/* StripedRows */}
            <StripedRows />

            {/* StripedRowsTwo */}
            <StripedRowsTwo />

            {/* TablesBorderColors */}
            <TablesBorderColors />

            {/* TablesBorderColorsTwo */}
            <TablesBorderColorsTwo />


            {/* TablesBorderColorsThree */}
            <TablesBorderColorsThree />

        </div>

    )
}

export default TableBasicLayer