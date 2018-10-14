import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import DisplayFile from './components/DisplayFile';
import DisplayFolderIcon from './components/DisplayFolderIcon';
import sortFunction from './components/sortFunction';

class App extends Component {

  constructor() {
    super();
    this.state = {
      userSort: ""
    };
    this.changeSort = this.changeSort.bind(this);
  }

  changeSort(event) {
    this.setState({userSort: event.target.value});
  }

  render() {
    const chooseSort = (
      <React.Fragment>
        <span> Sort by: </span>
        <select value={this.state.userSort} onChange={this.changeSort}>
          <option value="">-Select-</option>
          <option value="name">Name</option>
          <option value="type">File Type</option>
          <option value="added">Date Added</option>
          <option value="size">Size</option>
        </select>
      </React.Fragment>
    )
    sortFunction(data, this.state.userSort)
    const folder = data.map((file, i) => {
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
      <React.Fragment>
        <p>{chooseSort}</p>
        {folder}
      </React.Fragment>
    );
  }
}

export default App;
