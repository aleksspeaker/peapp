import * as React from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TodosContainer />
      </div>
    );
  }
}

export default App;