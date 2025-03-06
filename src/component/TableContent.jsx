import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeProject } from '../actions/projectAction';

function TableContent() {

    const projectChoice = useSelector(state => state.projectChoice);
    const dispatch = useDispatch()
    const handleClick = (select) => {
        
        dispatch(changeProject(select))

    }

    return (
        <div role='tablist' className="tabs tabs-boxed" >
            <button role='tab' className={`tab ${projectChoice === "Web" ? 'tab-active' : ""}`} onClick={(e) => { handleClick("Web") }}>Web Devlopment</button>
            <button role='tab' className={`tab ${projectChoice === "Lab" ? 'tab-active' : ""}`} onClick={(e) => { handleClick("Lab") }}>Home Lab</button>
            <button role='tab' className={`tab ${projectChoice === "Acd" ? 'tab-active' : ""}`} onClick={(e) => { handleClick("Acd") }}>Academic Projects</button>
        </div>
    )
}

export default TableContent