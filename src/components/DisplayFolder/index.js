import React from 'react';
import DisplayFile from '../DisplayFile';
import DisplayFolderIcon from '../DisplayFolderIcon';

class DisplayFolder extends React.Component {
  render () {
    const { type, name, files } = this.props;
    let folder = files.map((file, i) => {
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
    )
  }
}

export default DisplayFolder;
