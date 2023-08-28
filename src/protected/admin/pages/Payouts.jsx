import React, { useState } from 'react'
import Sidebar from '../../../common/Sidebar'
import PageHeader from '../../../common/PageHeader'
import { formatCurrency, formatDateWithFullMonthName, statusColor } from '../../../common/helpers/checkRole';
import { payoutData } from '../components/payouts/data';
import PayoutsTable from '../components/payouts/PayoutsTable';
import PaymentMethods from '../components/payouts/PaymentMethods';

const Payouts = () => {

    statusColor(status);

    const [payouts, setPayouts] = useState(payoutData)

    const columns = [
        {name: 'ID', selector: row => row.id, sortable: true, width: "200px"},
        {name: 'Amount', selector: row => formatCurrency(row.amount), sortable: true, width: "200px"},
        {
            name: 'Purchase Date', 
            selector: row => formatDateWithFullMonthName(row.purchase_date), 
            sortable: true, 
            width: "300px",
        },
        {name: 'Payment Method', selector: row => row.payment_method, sortable: true, width: "200px"},
        {
             name: 'Payment Status',
             selector: row => row.payment_status, 
             sortable: true,
             width: "100px",
             button: true,
             cell: (row) => <button 
                                className={`w-full my-2 p-3 ${statusColor(row.payment_status)} rounded-md`}
                            >
                                    {row.payment_status}
                            </button>,
         },
         {
             name: 'Action',
             button: true,
             width: "200px",
             cell: (row) => <button className="p-2 border-none font-medium">...</button>,
         },
    ];


    return (
        <div className='w-full'>
            <Sidebar />
            <div className='grow'>
                <div className='hidden md:w-[80px] lg:w-[200px]'>...</div>
                <div className='md:ml-[80px] lg:ml-[250px] bg-gray-100 px-3 lg:px-12 pb-6'>
                    <PageHeader />
                    <PayoutsTable columns={columns} payouts={payouts} />
                    <PaymentMethods />
                </div>
            </div>
        </div>
    )
}

export default Payouts
