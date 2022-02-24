import React from 'react'
import Navigation from './Navigation';
import classes from './Sidebar.module.css'

function Sidebar({navToggle}) {
    return (
        <div className={classes.sideBarStyled}>
            <Navigation />
        </div>
    )
}

export default Sidebar;
