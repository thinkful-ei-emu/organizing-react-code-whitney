// Create a new component AddNote that 
// implements a form to capture the name,
// content and folder for a new Note.
// Submit to the POST /notes endpoint on
// the server. Add validation to ensure that
// the name of the note is not left blank.
// The folder should be selected from a list
// of existing folders. Ensure that errors
// are properly handled. Add a button to the
// note list page to invoke this new form.

import React from 'react';
import StoreContext from '../context/StoreContext';

class AddNote extends React.Component {
  static contextType = StoreContext

  render() {
    return (
      <form className='add-note' id='add-note' onSubmit={e => this.context.handleNoteSave(e)}>
        <label htmlFor='note-name'> Note Name:
        <input
            type='text'
            name='newNote'
            id='note-name'
            placeholder='Unicorns'
            className='form-input'
            onChange={(e) => this.context.updateNoteName(e.target.value)} 
            required/>
        </label>

        <label htmlFor='note-content'>Note Content: 
          <textarea 
            id='note-content'
            form='add-note'
            name='note-content'
            placeholder='A mythical animal typically represented as a horse with a single straight horn porjecting from its forehead...'
            wrap='soft'
            onChange={(e) => this.context.updateNoteContent(e.target.value)}
            required />
        </label>
        <label htmlFor='folder-list'>Folder: 
          <select id='folder-list' onChange={(e) => this.context.updateFolderChoice(e.target.value)}>
            <option 
              value='select a folder'
              
              >Select a Folder</option>
            {this.context.folders.map(folder => <option
              key={folder.id}
              value={folder.id}
              
              >{folder.name}</option>)}
          </select>
        </label>

        <button type='submit'>Save</button>

      </form>
    )
  }
}

export default AddNote;