import React from 'react';
import ReactDOM from 'react-dom';

import Banned from './banned.js';
import Welcome from './welcome.js';

class Home extends React.Component {
  render() {
    const containerStyle = {
      width: "250px"
    };
    return(
    <div className="container" style={containerStyle}>
      <Welcome/>
      <br/>
      <Banned/>
    </div>
  )
  }
}
const app = document.getElementById('app');
ReactDOM.render(<Home/>, app);
