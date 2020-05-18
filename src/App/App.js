import React from 'react';
import './App.scss';
import Auth from '../components/Auth/Auth';
import BoardContainer from '../components/BoardContainer/BoardContainer';
import MyNavBar from '../components/MyNavBar/MyNavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <MyNavBar />
        <Auth />
        <BoardContainer />
      </div>
    );
  }
}

export default App;
