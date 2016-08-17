console.log("HELLO");
setTimeout(function(){
    banArtists();
}, 10000);
console.log("DOG");

function banArtists() {
  let songs = document.getElementsByClassName("yt-uix-scroller-scroll-unit");
  for(let i=0; i<songs.length; i++){
    checkAndDelete(songs[i]);
  }
}

function checkAndDelete(element){
  let  artistList = [
    "יובל דיין",
    "מוש בן ארי",
    "אליעד",
    "סטטיק",
    "נתן גושן"
  ];
  for(var i=0; i<artistList.length; i++) {
    if(element.dataset.videoTitle.includes(artistList[i])){
      console.log("removed: " + element.dataset.videoTitle + "from your playlist")
      element.parentNode.removeChild(element);
      break;
    }
  }
}
