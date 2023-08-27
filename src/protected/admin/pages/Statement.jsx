import React, { useState } from 'react'
import Sidebar from '../../../common/Sidebar'
import PageHeader from '../../../common/PageHeader'
import { statementData } from '../components/statement/data'
import StatementTable from '../components/statement/StatementTable'
import { formatCurrency, formatDateWithFullMonthName } from '../../../common/helpers/checkRole'
import StatementStatistics from '../components/statement/StatementStatistics'

const Statement = () => {

    const [statement, setStatement] = useState(statementData)

    const columns = [
        {name: 'ID', selector: row => row.id, sortable: true, width: "80px"},
        
        {name: 'Date', selector: row => formatDateWithFullMonthName(row.post_date), sortable: true, width: "200px"},
        {name: 'Type', selector: row => row.type, sortable: true, width: "200px"},
        {name: 'Detail', selector: row => row.detail, sortable: true, width: "420px"},
        {name: 'Amount', selector: row => formatCurrency(row.amount), sortable: true, width: "150px"},
        {
             name: 'Action',
             button: true,
             width: "150px",
             cell: (row) => <button className="p-2 border-none font-medium">...</button>,
        },
    ];

    return (
        <div className='w-full'>
            <Sidebar />
            <div className='grow'>
                <div className='hidden md:w-[80px] lg:w-[200px]'>...</div>
                <div className='md:ml-[80px] lg:ml-[250px] bg-gray-100 px-3 lg:px-12'>
                    <PageHeader />
                    <StatementStatistics />
                    <StatementTable columns={columns} statement={statement} />
                </div>
            </div>
        </div>
    )
}

export default Statement
