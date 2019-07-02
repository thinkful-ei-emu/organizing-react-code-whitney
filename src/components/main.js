import React from 'react';
import MainSideBar from './mainsidebar';
import NoteList from './notelist';

function Main (props) {

    return(
        <NoteList notes={props.notes}/>

    )
}

export default Main