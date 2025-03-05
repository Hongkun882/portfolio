import React, { useEffect } from 'react'
import { projectData } from "../projectdata/webprojectdetails";
import ProjectItem from "../component/ProjectItem"
import Pagination from '../component/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../actions/PageAction';



function WebProject() {

    const dispatch = useDispatch()
    
    const numItems = 3
    const {currentPage} = useSelector(state => state.pages)
    
    const maxPage = Math.ceil(projectData.length / numItems);
    useEffect(()=>{


        dispatch(setPage(1,maxPage))
    },[dispatch, maxPage])

    
    const lastInx = numItems * currentPage
   const firstInx = lastInx - numItems;
   const currentItems = projectData.slice(firstInx, lastInx);
    return (
        <div className='flex flex-col h-full min-h-screen items-center'>
            <div className=" flex flex-col justify-center items-center h-full mt-3" >
                {
                    currentItems.map((project, index) => (
                        <ProjectItem info={project} key={index}></ProjectItem>
                    ))
                }

                

            </div>
            <Pagination/>
        </div>


    )
}

export default WebProject