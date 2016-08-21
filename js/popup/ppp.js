import React from 'react';
import ReactDOM from 'react-dom';

import Banned from './banned.js';
import Welcome from './welcome.js';

class Home extends React.Component {
  render() {
    return <div>
      <Welcome/>
      <br/>
      <Banned/>
    </div>

  }
}
const app = document.getElementById('app');
ReactDOM.render(<Home/>, app);
