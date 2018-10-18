import * as React from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <h1 className="heading">minima.List</h1>
        <TodosContainer />
        <button className="reset">reset</button>
      </div>
    );
  }
}

export default App;