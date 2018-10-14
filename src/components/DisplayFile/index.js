import React from 'react';
import './style.css';
import fileIcon from './images/file-icon.png';

class DisplayFile extends React.Component {
  render () {
    const { type, name, added } = this.props;
    return (
      <React.Fragment>
        <img className="img-box" alt="file" src={fileIcon}/>
        <p className="align-text">
          {name} - {type} - {added}
        </p>
      </React.Fragment>
    )
  }
}

export default DisplayFile;
