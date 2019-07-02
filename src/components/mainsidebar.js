import React from 'react';

function MainSideBar(props) {

    const folderList = props.folders.map(folder => {
        return(
            <li key={folder.id}>
                {folder.name}
            </li>
        )
    })

    return (
        <div>
            {folderList}
        </div>
    )
}

export default MainSideBar;