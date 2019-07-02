import React from 'react';

function NoteList(props) {

    const noteList = props.notes.map(note => {
        return (
            <li key={note.id}>
                <h2>{note.name}</h2>
                <p>{note.modified}</p>
                <button type="click">Delete Note</button>
            </li>
        )
    })

    return (
        <div>
            {noteList}
        </div>
    )

}

export default NoteList;