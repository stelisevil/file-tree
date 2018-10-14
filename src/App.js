import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import DisplayFile from './components/DisplayFile';
import DisplayFolder from './components/DisplayFolder';
import DisplayFolderIcon from './components/DisplayFolderIcon';

class App extends Component {
  render() {
    let folder = data.map((file, i) => {
      if (file.files) {
        return (
          <DisplayFolderIcon
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
