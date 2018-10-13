import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import DisplayFile from './components/DisplayFile';

class App extends Component {

  render() {
    console.log(data)
    let files = data.map((file, i) => {
      return (
        <DisplayFile
          key={i}
          type={file.type}
          name={file.name}
          added={file.added}
          files={file.files}
        />
      )
    })
    return (
      files
    );
  }
}

export default App;
