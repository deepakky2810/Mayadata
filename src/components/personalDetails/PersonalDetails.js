import React from 'react';
import '../../css/components/personalDetails.css';

import { useDispatch, useSelector } from 'react-redux';

const PersonalDetails = () => {

    const flags = useSelector(state => state.flags);
    const detailsClass = flags.sidebarOpen ? "details" : "sidebar-close";

    return (
        <div className={detailsClass}>
            <h1>About Me</h1>

            <div className="wrapper" >
                <p className="p-1">Name: Deepak Kumar Yadav</p>
                <p>Roll: 1805483</p>
                <p>Github Profile: <a href="https://github.com/deepakky2810" target="_blank" rel="noreferrer">Click to visit</a></p>
                <p>Skills: C</p>
                <p className="p-2">Projects:</p>
                <p>1. Eco-friendly Portable Cooling System</p>
                <p>2. Invoice Management System</p>

            </div>
        </div>
    );
};

export default PersonalDetails;