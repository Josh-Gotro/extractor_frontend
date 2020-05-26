import React from 'react';
import ImageUpload from './components/ImageUpload'
import './App.css';

function App() {
  return (
    <div className="App">
      < ImageUpload onFilesAdded={console.log("file added")}/>
    </div>
  );
}

export default App;
