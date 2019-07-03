import React from 'react';
import './App.css';
import store from './dummy-store';
import {Route} from 'react-router-dom'
import Main from './components/main';
import MainSideBar from './components/mainsidebar'
import Header from './components/header'
import Note from './components/note'
import StoreContext from './context/StoreContext'


class App extends React.Component {
  
  state = {
    store
  }

  render(){

  return (
    <StoreContext.Provider value = {{
      folders: this.state.store.folders,
      notes: this.state.store.notes
    }}>
    <div className="App">
      <Header/>
        <Route exact path='/' 
        render={props => <MainSideBar />}
        />
      <Route exact path='/' 
      render={props => <Main match={props.match}/>}
      />
      <Route exact path='/folder/:folderId'
      render={props => <> <MainSideBar match={props.match}/> 
      <Main match={props.match}/>
      </>}
      />

      <Route exact path='/note/:noteId'
      render={props => <Note match={props.match} history={props.history}/>}/>
    </div>
    </StoreContext.Provider>
  );
}
}

export default App;
