import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../actions/PageAction'

function Pagination({projectChoice}) {

    const dispatch = useDispatch()
    const webProject = useSelector(state => state.WebPages);
    const acadProject = useSelector(state => state.AcdPages);

    const project = projectChoice === "Web" ? webProject : acadProject
    const {currentPage, maxPage, minPage} = project;
    const handleClick = (type)=>{

        dispatch(changePage(type))
    }
    return (
        <div className="join mt-auto my-3">
            <button className={`join-item btn ${currentPage === minPage ? "btn-disabled" : ""}`} onClick={e => {handleClick("Previous")}}>«</button>
            <button className="join-item btn">Page {currentPage}</button>
            <button className={`join-item btn ${currentPage === maxPage ? "btn-disabled" : ""}`} onClick={e => {handleClick("Next")}}>»</button>
        </div>
    )

}

export default Pagination