import React from 'react';
import './style.css';
import DisplayFolder from '../DisplayFolder';
import closedFolder from './images/closed-folder.png';
import openedFolder from './images/open-folder.png';

class DisplayFolderIcon extends React.Component {
  constructor() {
    super();
    this.state = {
      folderOpen: false,
      userSort: ""
    };
    this.changeSort = this.changeSort.bind(this);
  }

  changeSort(event) {
    this.setState({userSort: event.target.value});
  }

  render () {
    const { type, name, files } = this.props;
    const chooseSort = this.state.folderOpen ? (
      <React.Fragment>
        <span> - Sort by: </span>
        <select value={this.state.userSort} onChange={this.changeSort}>
          <option value="">-Select-</option>
          <option value="name">Name</option>
          <option value="type">File Type</option>
          <option value="added">Date Added</option>
          <option value="size">Size</option>
        </select>
      </React.Fragment>
    ) : (
      null
    )
    const folderIcon = this.state.folderOpen ? openedFolder : closedFolder;
    const expandFolder = this.state.folderOpen ? (
      <DisplayFolder
        type={type}
        name={name}
        files={files}
        userSort={this.state.userSort}
      />
    ) : (
      null
    )
    return (
      <React.Fragment>
        <img
          className="img-box"
          alt="folder icon"
          src={folderIcon}
          onClick={() => this.setState({ folderOpen: !this.state.folderOpen })}
        />
        <p className="align-text">
          {name} - {type} - {files.length} items{chooseSort}
        </p>
        <p className="expand">
          {expandFolder}
        </p>
      </React.Fragment>
    )
  }
}

export default DisplayFolderIcon;
