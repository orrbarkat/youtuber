import React from 'react';

export default class Welcome extends React.Component {
  render() {
    const headerStyle = {
      textAlign: "center"
    };
    return(
      <h3 style={headerStyle}>Hello Buddy</h3>

    )
  }
}
