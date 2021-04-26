import React, {Component} from 'react';
// import logo fro m './logo.svg';
import './css/App.css';
import  {todos}  from './todos.json';
//import Navigate from './components/navigate';


console.log(todos);

class App extends Component {
  state = { tasks: todos } // Tasks defined
  render() {
    return <div>
      {this.state.tasks.map(ele => <p key={ele.id}>
        {ele.title} - {ele.description} - {String(ele.done)} -{ele.id}
        </p> )}
    </div>
  }
}

export default App;
