import React from 'react';
import NoteList from './notelist';

function Main (props) {

    return(
        <div>
            <NoteList folders={props.folders} match={props.match} notes={props.notes}/>
            <button>Add Note</button>
        </div>
    )
}

export default Main