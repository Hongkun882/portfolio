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
        <ul className="menu bg-base-200 rounded-box w-56 h-screen m-3">
            <li>
                <h2 className="menu-title">{title}</h2>
                <ul>
                    <li><a className={`${projectChoice === "Web" ? 'active' : ""}`} onClick={(e)=>{handleClick("Web")}}>Web Devlopment</a></li>
                    <li><a className={`${projectChoice === "Lab" ? 'active' : ""}`} onClick={(e)=>{handleClick("Lab")}}>Home Lab</a></li>
                    <li><a className={`${projectChoice === "Acd" ? 'active' : ""}`} onClick={(e)=>{handleClick("Acd")}}>Academic Projects</a></li>
                </ul>
            </li>
        </ul>
    )
}

export default TableContent