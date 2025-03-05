import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeProject } from '../actions/projectAction';

function TableContent({ title }) {

    const projectChoice = useSelector(state => state.projectChoice);
    const dispatch = useDispatch()
    const handleClick = (select) => {

        dispatch(changeProject(select))

    }

    return (
        <div role='tablist' className="tabs tabs-boxed" >
            <a role='tab' className={`tab ${projectChoice === "Web" ? 'tab-active' : ""}`} onClick={(e) => { handleClick("Web") }}>Web Devlopment</a>
            <a role='tab' className={`tab ${projectChoice === "Lab" ? 'tab-active' : ""}`} onClick={(e) => { handleClick("Lab") }}>Home Lab</a>
            <a role='tab' className={`tab ${projectChoice === "Acd" ? 'tab-active' : ""}`} onClick={(e) => { handleClick("Acd") }}>Academic Projects</a>
        </div>
    )
}

export default TableContent