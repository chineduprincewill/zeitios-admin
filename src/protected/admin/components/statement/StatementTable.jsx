import React, { useMemo, useState } from 'react'
import Search from '../../../../common/Search';
import DataTable from 'react-data-table-component';
import { tableCustomStyles } from '../../../../common/tableStyles';
import { formatDateWithFullMonthName } from '../../../../common/helpers/checkRole';

const StatementTable = ({ columns, statement }) => {

    const [search, setSearch] = useState("");

    let computedData = statement;

    const searchData = useMemo(() => {

        if(search){
            computedData = computedData.filter(
                pdt => pdt.amount.toString().includes(search) ||
                        formatDateWithFullMonthName(pdt.post_date).toLowerCase().includes(search.toLowerCase()) ||
                        pdt.type.toLowerCase().includes(search.toLowerCase()) ||
                        pdt.detail.toLowerCase().includes(search.toLowerCase())
            )
        }
        return computedData;
    }, [search])


    return (
        <div className='overflow-auto w-[100%] mt-8 mb-12 bg-white p-4 rounded-md'>
            <Search setSearch={setSearch} />
            <DataTable 
                columns={columns} data={searchData}
                paginationTotalRows={statement.totalCount}
                className='w-full table table-responsive'
                striped={true}
                responsive={true}
                overflowX
                pagination
                customStyles={tableCustomStyles}
            ></DataTable>
        </div>
    )
}

export default StatementTable
