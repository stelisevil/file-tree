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
      userSort: "",
      userFilter: ""
    };
    this.changeUserSort = this.changeUserSort.bind(this);
    this.changeUserFilter = this.changeUserFilter.bind(this);
  }

  changeUserSort(e) {
    this.setState({ userSort: e.target.value });
  }
  changeUserFilter(e) {
    this.setState({ userFilter: e.target.value });
  }

  render() {
    const filterFiles = (
      <React.Fragment>
        <div>Filter:
          <input
            type="text"
            className="filter-box"
            value={this.state.userFilter}
            onChange={this.changeUserFilter}
          />
        </div>
      </React.Fragment>
    )

    const filteredFiles = [];

    data.forEach(item => {
      if (item.name.toLowerCase().includes(this.state.userFilter.toLowerCase().trim())) {
        filteredFiles.push(item)
      }
    })

    const filteredResults = (this.state.userFilter.trim() && filteredFiles.length === 0 ) ? "No Results"
    : (this.state.userFilter.trim()) ?
      filteredFiles.map((item, i) => {
        if (item.files) {
          return (
            <DisplayFolderIcon
              key={i}
              type={item.type}
              name={item.name}
              files={item.files}
            />
          )
        } else {
          return (
            <DisplayFile
              key={i}
              type={item.type}
              name={item.name}
              added={item.added}
            />
          )
        }
      })
    :
      null

    const chooseSort = (
      <React.Fragment>
        <span> Sort by: </span>
        <select value={this.state.userSort} onChange={this.changeUserSort}>
          <option value="">-Select-</option>
          <option value="name">Name</option>
          <option value="type">File Type</option>
          <option value="added">Date Added</option>
          <option value="size">Size</option>
        </select>
      </React.Fragment>
    )

    sortFunction(data, this.state.userSort)

    const folder = data.map((item, i) => {
      if (item.files) {
        return (
          <DisplayFolderIcon
            key={i}
            type={item.type}
            name={item.name}
            files={item.files}
          />
        )
      } else {
        return (
          <DisplayFile
            key={i}
            type={item.type}
            name={item.name}
            added={item.added}
          />
        )
      }
    })

    return (
      <React.Fragment>
        <p>{chooseSort}</p>
        {folder}
        {filterFiles}
        {filteredResults}
      </React.Fragment>
    );
  }
}

export default App;
