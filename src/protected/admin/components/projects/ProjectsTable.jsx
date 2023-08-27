import React, { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component'
import Search from '../../../../common/Search'
import { tableCustomStyles } from '../../../../common/tableStyles';

const ProjectsTable = ({ columns, pdata }) => {

    const [search, setSearch] = useState("");

    let computedData = pdata;

    const searchData = useMemo(() => {

        if(search){
            computedData = computedData.filter(
                pdt => pdt.clientname.toLowerCase().includes(search.toLowerCase()) ||
                        pdt.description.toLowerCase().includes(search.toLowerCase()) ||
                        pdt.status.toLowerCase().includes(search.toLowerCase())
            )
        }
        return computedData;
    }, [search])



    return (
        <div className='overflow-auto w-[100%] mt-16 mb-12 bg-white p-4 rounded-md'>
            <Search setSearch={setSearch} />
            <DataTable 
                columns={columns} data={searchData}
                paginationTotalRows={pdata.totalCount}
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

export default ProjectsTable
