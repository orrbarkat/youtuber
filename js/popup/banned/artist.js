import React from 'react';

export default class Artist extends React.Component {
  handleClick(e){
    const item = this.props.title;
    this.props.deleteItem(item);
  }

  render() {
    const { title } = this.props;
    const artStyle = {
      text:{
        justifyContent: "left"
      },
      glyph:{
        float: "right"
      }
    };

    return (
        <button className="list-group-item" onClick={this.handleClick.bind(this)} >
          <span style={artStyle.text}>{title}</span><span className="glyphicon glyphicon-remove" aria-hidden="true" style={artStyle.glyph}></span>
        </button>
    )
  }
}
