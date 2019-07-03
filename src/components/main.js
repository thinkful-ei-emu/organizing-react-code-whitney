import React from 'react';
import NoteList from './notelist';
import './styles/main.css'

function Main (props) {

    return(
        <div>
            <NoteList match={props.match}/>
            <button className="add-note">Add Note</button>
        </div>
    )
}

export default Main