import React from "react";
import './styles/note.css'

function Note(props) {



  const note = props.notes.find(note => `/note/${note.id}` === props.match.url);
  
//   props.notes
//     .filter(note => `/note/${note.id}` === props.match.url)
//     .map(note => {
      const date = new Date(note.modified);
      const convertedDate = date.toDateString();

        const folder = props.folders.find(folder => {
            if (folder.id === note.folderId){
                return true
            } else return false 
        })

//         console.log(folder.name);

    //   return (
    //     <div key={note.id}>
    //       <button>Go Back</button>
    //       <h2>{folder.name}</h2>

    //       <div>
    //         <h2>{note.name}</h2>
    //         <p>Date Modified On: {convertedDate}</p>
    //         <button type="click">Delete Note</button>
    //       </div>

    //       <p>{note.content}</p>

    //     </div>
    //   );

  return <div key={note.id}>
    <div className="button-folder-container">
  <button className="go-back" onClick={()=>props.history.goBack()}>Go Back</button>
  <h2 className="folder-name">{folder.name}</h2>
  </div>

  <div className="expanded-note">
    <h2 className="note-name">{note.name}</h2>
    <p>Date Modified On: {convertedDate}</p>
    <button type="click">Delete Note</button>
  </div>

  <p className="note-content">{note.content}</p>

</div>
}

export default Note;
