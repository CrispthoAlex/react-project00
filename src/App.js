import logo from './logo.svg';
import './css/App.css';
import Navigate from './components/navigate';
import  {todos}  from './todos.json';

console.log(todos)
function App() {
  // Constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: "Task app",
  //     numberTask: 25
  //   }
  // }
  return (
    <div className="App">
      <Navigate bgtitle="Home"/>
      
      <header className="App__header">
        <img src={logo} className="App__logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
