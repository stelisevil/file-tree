import React from 'react';
import DisplayFile from '../DisplayFile';
import DisplayFolderIcon from '../DisplayFolderIcon';
import sortFunction from '../sortFunction';

class DisplayFolder extends React.Component {

  render () {
    const { type, name, files, userSort } = this.props;
    sortFunction(files, userSort)
    const folder = files.map((item, i) => {
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
      folder
    )
  }
}

export default DisplayFolder;
