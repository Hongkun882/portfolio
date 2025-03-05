import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../actions/PageAction'

function Pagination() {

    const dispatch = useDispatch()
    const {currentPage, maxPage, minPage} = useSelector(state => state.pages)
    
    const handleClick = (type)=>{

        dispatch(changePage(type))
    }
    return (
        <div class="join mt-auto">
            <button className={`join-item btn ${currentPage === minPage ? "btn-disabled" : ""}`} onClick={e => {handleClick("Previous")}}>«</button>
            <button className="join-item btn">Page {currentPage}</button>
            <button className={`join-item btn ${currentPage === maxPage ? "btn-disabled" : ""}`} onClick={e => {handleClick("Next")}}>»</button>
        </div>
    )
}

export default Pagination