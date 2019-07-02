import React from 'react';
import NoteList from './notelist';
import './styles/main.css'

function Main (props) {

    return(
        <div>
            <NoteList folders={props.folders} match={props.match} notes={props.notes}/>
            <button className="add-note">Add Note</button>
        </div>
    )
}

export default Main