console.log("HELLO");
banArtists();
setInterval(banArtists, 60000);
console.log("DOG");


function banArtists(){
  chrome.storage.sync.get("artists", function(data){
    console.log(data);
    if(!data){
      console.log("no artists in the list");
    }else{
      let list = data.artists;
      console.log(list);
      let songs = document.getElementsByClassName("yt-uix-scroller-scroll-unit");
      for(let i=0; i<songs.length; i++){
        checkAndDelete(songs[i],list);
      }
    }
  });
}

function checkAndDelete(element, artistList){
  if (!artistList.length){
    return NULL;
  }else{
    for(var i=0; i<artistList.length; i++) {
      if(element.dataset.videoTitle.includes(artistList[i])){
        console.log("removed: " + element.dataset.videoTitle + "from your playlist")
        element.parentNode.removeChild(element);
        break;
      }
    }
  }
}
