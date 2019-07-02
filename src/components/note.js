import React from "react";

function Note(props) {



  const note = props.notes.find(note => `/note/${note.id}` === props.match.url);
  
//   props.notes
//     .filter(note => `/note/${note.id}` === props.match.url)
//     .map(note => {
      const date = new Date(note.modified);
      const convertedDate = date.toDateString();

        const folder = props.folders.find(folder =>{
            if (folder.id === note.folderId){
                return true
            }
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
  <button onClick={()=>props.history.goBack()}>Go Back</button>
  <h2>{folder.name}</h2>

  <div>
    <h2>{note.name}</h2>
    <p>Date Modified On: {convertedDate}</p>
    <button type="click">Delete Note</button>
  </div>

  <p>{note.content}</p>

</div>
}

export default Note;
