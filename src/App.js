import React from 'react';
import './App.css';
import store from './dummy-store';
import {Route} from 'react-router-dom'
import Main from './components/main';
import MainSideBar from './components/mainsidebar'
import Header from './components/header'


class App extends React.Component {
  
  state = {
    store
  }

  render(){

  return (
    <div className="App">
      <Header/>
        <Route path='/' 
        render={props => <MainSideBar folders={this.state.store.folders}/>}
        />
      <Route exact path='/' 
      render={props => <Main notes={this.state.store.notes}/>}
      />
    </div>
  );
}
}

export default App;
