import React from 'react';
import './style.css';

class DisplayFile extends React.Component {
  render () {
    const { type, name, added, files } = this.props;
    let folder = (files) ? (
      files.map((file, i) => {
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
    ) : (
      null
    );
    return (
      <p>
        {name}- {type}- {added}- {folder}
      </p>
    )
  }
}

export default DisplayFile;
