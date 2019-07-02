import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/mainsidebar.css'

function MainSideBar(props) {
    const folderList = props.folders.map(folder => {
        return(
            <li key={folder.id} className="nav-list">
                <NavLink to={`/folder/${folder.id}`} style={{ textDecoration: 'none' }}>
                  {folder.name}
                </NavLink>
            </li>
        )
    })
    return (
        <div className="nav-container">
            <nav>
                {folderList}
            </nav>
            <button className="add-button">Add Folder</button>
        </div>
    )
}

export default MainSideBar;