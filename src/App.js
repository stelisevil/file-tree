import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import DisplayFile from './components/DisplayFile';
import DisplayFolder from './components/DisplayFolder';

class App extends Component {
  render() {
    let folder = data.map((file, i) => {
      if (file.files) {
        return (
          <DisplayFolder
            key={i}
            type={file.type}
            name={file.name}
            files={file.files}
          />
        )
      } else {
        return (
          <DisplayFile
            key={i}
            type={file.type}
            name={file.name}
            added={file.added}
          />
        )
      }
    })
    return (
      folder
    );
  }
}

export default App;
