import React, { useState } from 'react'
import Sidebar from '../../../common/Sidebar'
import PageHeader from '../../../common/PageHeader'
import { projectData } from '../components/projects/data';
import ProjectsTable from '../components/projects/ProjectsTable';
import { statusColor } from '../../../common/helpers/checkRole';


const Projects = () => {

    statusColor(status);

    const columns = [
        {name: 'ID', selector: row => row.id, sortable: true, width: "80px"},
        {name: 'Client', selector: row => row.clientname, sortable: true, width: "150px"},
        {name: 'Description', selector: row => row.description, sortable: true, width: "700px"},
        {
             name: 'Status',
             selector: row => row.status, 
             sortable: true,
             width: "120px",
             button: true,
             cell: (row) => <button 
                                className={`w-full my-2 p-3 ${statusColor(row.status)} rounded-md`}
                            >
                                    {row.status}
                            </button>,
         },
         {
             name: 'Action',
             button: true,
             width: "150px",
             cell: (row) => <button className="p-2 border-none font-medium">...</button>,
         },
    ];

    const [pdata, setPdata] = useState(projectData);

    return (
        <div className='w-full'>
            <Sidebar />
            <div className='grow'>
                <div className='hidden md:w-[80px] lg:w-[200px]'>...</div>
                <div className='md:ml-[80px] lg:ml-[250px] bg-gray-100 px-3 lg:px-12'>
                    <PageHeader />
                    <ProjectsTable columns={columns} pdata={pdata} />
                </div>
                
            </div>
        </div>
    )
}

export default Projects
