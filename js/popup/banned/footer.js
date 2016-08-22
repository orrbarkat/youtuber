import React from "react";

export default class Footer extends React.Component {
  handleChange(e) {
    const title = document.getElementById("newInput").value.toLowerCase();
    document.getElementById("newInput").value = "";
    console.log(title);
    if(title.length){
      this.props.changeTitle(title);
    }
  }

  render() {
    return (
      <div class="row">
        <div class="col-lg-6">
          <div class="input-group">
            <input id="newInput" type="text" class="form-control" placeholder="Ban an annoying artist"/>
            <span class="input-group-btn">
              <button class="btn btn-default" type="button" onClick={this.handleChange.bind(this)}>Go!</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
