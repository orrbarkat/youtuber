import React from 'react';

export default class Artist extends React.Component {
  handleClick(e){
    const item = this.props.title;
    this.props.deleteItem(item);
  }

  render() {
    const { title } = this.props;
    const artStyle = {
      width: "5px",
      hight: "5px"
    };

    return (
      <div width="70px">
        <h4>{title}</h4>
        <button class="btn btn-default" onClick={this.handleClick.bind(this)} >
          <img src="x.png" style={artStyle} />
        </button>
      </div>
    );
  }
}
