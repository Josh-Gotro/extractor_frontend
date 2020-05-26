import React, { Component } from 'react';
import ImageUpload from './components/ImageUpload'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      allImages: null
    }
  }

  doSomething = (something) => {
    console.log(something)
  }

  render() {
    return (
      <div className="App" >
        < ImageUpload onFilesAdded={this.doSomething} />
      </div>
    );
  }

};


export default App;


