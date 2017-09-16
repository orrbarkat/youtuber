console.log("HELLO");
banArtists();
setInterval(banArtists, 2000);
console.log("DOG");


function banArtists(){
  chrome.storage.sync.get("artists", function(data){
    if(!data || !data.artists || !data.artists.length){
      console.log("no artists in the list");
    }else{
      let list = data.artists;
      let currentSong = document.getElementsByClassName("title style-scope ytd-video-primary-info-renderer")[0].innerText;
      //document.getElementById("eow-title");
      checkAndDelete(currentSong,list);
    }
  });
}

function checkAndDelete(currentSong, artistList){
  if (!artistList.length){
    return NULL;
  }else{
    let title = currentSong.toLowerCase();
    for(var i=0; i<artistList.length; i++) {
      if(title.includes(artistList[i].toLowerCase())){
        let next = document.getElementsByClassName("ytp-next-button ytp-button")[0];
        next.click();
        console.log("removed: " + title + "from your playlist")
        return;
      }
    }
  }
}
