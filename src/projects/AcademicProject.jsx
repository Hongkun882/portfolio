import React, { useEffect } from 'react'
import { academicProjects } from "../projectdata/academicProject"
import ProjectItem from "../component/ProjectItem"
import Pagination from '../component/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../actions/PageAction';



function AcademicProject() {

    const dispatch = useDispatch()

    const numItems = 3
    const { currentPage } = useSelector(state => state.AcdPages)

    const maxPage = Math.ceil(academicProjects.length / numItems);

    useEffect(() => {
        
            dispatch(setPage("Acd", 1, maxPage));
        

    }, [dispatch, maxPage, currentPage]);


    const lastInx = numItems * currentPage
    const firstInx = lastInx - numItems;
    const currentItems = academicProjects.slice(firstInx, lastInx);
    return (
        <div className='flex flex-col h-full min-h-screen items-center'>
            <div className=" flex flex-col justify-center items-center h-full mt-3" >
                {
                    currentItems.map((project, index) => (
                        <ProjectItem info={project} key={index}></ProjectItem>
                    ))
                }



            </div>
            <Pagination projectChoice={"Acd"} />
        </div>


    )
}

export default AcademicProject