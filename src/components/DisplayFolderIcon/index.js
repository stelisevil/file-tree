import React from 'react';
import './style.css';
import DisplayFolder from '../DisplayFolder';
import closedFolder from './images/closed-folder.png';
import openFolder from './images/open-folder.png';

class DisplayFolderIcon extends React.Component {
  constructor() {
    super();
    this.state = {
      folderOpen: false
    };
  }

  render () {
    const { type, name, files } = this.props;
    let folderIcon = this.state.folderOpen ? openFolder : closedFolder;
    const expand = this.state.folderOpen ? (
      <DisplayFolder
        type={type}
        name={name}
        files={files}
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
        <p class="align-text">
          {name} - {files.length} items
        </p>
        <p class="expand">
          {expand}
        </p>
      </React.Fragment>
    )
  }
}

export default DisplayFolderIcon;
