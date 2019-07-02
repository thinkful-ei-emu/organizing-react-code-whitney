import React from 'react';
import { NavLink } from 'react-router-dom';

function MainSideBar(props) {
    const folderList = props.folders.map(folder => {
        return(
            <li key={folder.id}>
                <NavLink to={`/folder/${folder.id}`}>
                  {folder.name}
                </NavLink>
            </li>
        )
    })
    return (
        <div>
            <nav>
                {folderList}
            </nav>
            <button>Add Folder</button>
        </div>
    )
}

export default MainSideBar;