import React, { useState } from 'react';
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faTableList, faSchool, faCode, faInfo, faPeopleGroup, faDiagramProject } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [open, setOpen] = useState(false);

    return <>
        <header>
            <nav>
                <ul className={open ? '' : 'show'}>
                    <li><a href="/">Logo</a></li>
                    <li><a href="/job-offer"><FontAwesomeIcon icon={faBriefcase} /></a></li>
                    <li><a href="/quiz"><FontAwesomeIcon icon={faTableList} /></a></li>
                    <li><a href="/trainings"><FontAwesomeIcon icon={faSchool} /></a></li>
                    <li><a href="/developer-path"><FontAwesomeIcon icon={faCode} /></a></li>
                    <li><a href="/events"><FontAwesomeIcon icon={faInfo} /></a></li>
                    <li><a href="/discussion-circles"><FontAwesomeIcon icon={faPeopleGroup} /></a></li>
                    <li><a href="/projects"><FontAwesomeIcon icon={faDiagramProject} /></a></li>
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