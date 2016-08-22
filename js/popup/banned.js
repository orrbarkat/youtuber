import React from 'react';

import Artist from './banned/artist.js';
import Footer from './banned/footer.js';


export default class Banned extends React.Component {
    constructor() {
      super()
      this.state = {
        artists: []
      };
      console.log(this.state.artists);
      chrome.storage.onChanged.addListener(() => {
        this._setStateFromStorage()
      });
    }


    changeTitle(title) {
      let newArray;
      if(this.state.artists){
        newArray = [ ...this.state.artists, title ];
      }else{
          newArray = [title];
      }
      chrome.storage.sync.set({"artists": newArray}, function() {
          console.log("Saved a new array item");
      });
    }

    _deleteItem(item){
      let newArray = this.state.artists.slice();
      const index = newArray.indexOf(item);
      console.log(newArray.splice(index,1));
      chrome.storage.sync.set({"artists": newArray}, function() {
          console.log("Saved a new array item");
      });
    }



    _setStateFromStorage(){
      chrome.storage.sync.get("artists", (data) => {
        if(!data){
          chrome.storage.sync.set({"artists": []}, function() {
          });
          console.log("no artists in the list");
        }else{
          let list = data.artists;
          this.setState({artists: list});
        }
      });
    }

    render() {
      this._setStateFromStorage();
      let artistsList = this.state.artists;
      if (artistsList){
        artistsList = artistsList.map((element, i) => <Artist key={i} title={element} deleteItem={this._deleteItem.bind(this)}/>)
      }
      return (
        <div>
            <div className="list-group" role="group" aria-label="...">
              {artistsList}
              <Footer className="list-group" changeTitle={this.changeTitle.bind(this)}/>
          </div>
        </div>
      )
    }

}
