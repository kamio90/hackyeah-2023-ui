import React, { useState } from 'react';
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faTableList, faSchool, faCode, faInfo, faPeopleGroup, faDiagramProject } from '@fortawesome/free-solid-svg-icons'
import {Route, Link, Routes} from 'react-router-dom';

function Header() {
    const [open, setOpen] = useState(false);

    return <>
        <header className="header">
            <nav>
                <ul className={open ? '' : 'show'}>
                    <li><Link to="/">Logo</Link></li>
                    <li><Link to="/job-offer"><FontAwesomeIcon icon={faBriefcase} /></Link></li>
                    <li><Link to="/quiz"><FontAwesomeIcon icon={faTableList} /></Link></li>
                    <li><Link to="/trainings"><FontAwesomeIcon icon={faSchool} /></Link></li>
                    <li><Link to="/developer-path"><FontAwesomeIcon icon={faCode} /></Link></li>
                    <li><Link to="/events"><FontAwesomeIcon icon={faInfo} /></Link></li>
                    <li><Link to="/discussion-circles"><FontAwesomeIcon icon={faPeopleGroup} /></Link></li>
                    <li><Link to="/projects"><FontAwesomeIcon icon={faDiagramProject} /></Link></li>
                </ul>
            </nav>
            <button className='menu-btn' onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
    </>
}

export default Header;