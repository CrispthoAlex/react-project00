import React from 'react';
// import logo fro m './logo.svg';
import './css/App.css';
import Navigate from './components/navigate';
import  {todos}  from './todos.json';

console.log(todos);

class Helloworld extends React.Component {
  
  state = {
    show: true,
  }
  toggleShow = () => this.setState( { show: !this.state.show } )

  render() {
    if (this.state.show){
      return (
        <div id="hello">
          Testing:
          <h3>{this.props.subtitle}</h3>
          <h5>{this.props.text}</h5>
          <button onClick= { this.toggleShow } >Toggle Show</button>
        </div>
      )
    } else {
      return <div>
          <h2>There are not elements</h2>
          <button onClick= { this.toggleShow } >Toggle Show</button>
        </div>
    }
  }
}


function App() {
  return (
    <div className="App">
      <Navigate bgtitle="Home"/>
      <Helloworld text="Hello your name" subtitle="testing 1st subtitle"/>
      <Helloworld text="Hello Crisptho" subtitle="testing 2nd subtitle"/>
      <Helloworld text="Hello Stranger" subtitle="testing 3rd subtitle"/>
    </div>
  );
}

export default App;
