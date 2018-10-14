import React from 'react';

class DisplayFile extends React.Component {
  render () {
    const { type, name, added } = this.props;
    return (
      <p>
        {name}- {type}- {added}
      </p>
    )
  }
}

export default DisplayFile;
