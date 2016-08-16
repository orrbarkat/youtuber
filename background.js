'use strict';

var list = [
  "יובל דיין",
  "מוש בן ארי",
  "אליעד"
];

function logTabs(tabs) {
  console.log(tabs);
  if(tabs.length != 0){
  var youtubeId = tabs[0].id;
  // document.getElementsById("currently-playing");
  console.log(youtubeId);
  chrome.tabs.executeScript( youtubeId, { file: "banThem.js"});
  }
  
  
}
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    console.log("it logs!!!");

    

    chrome.tabs.query({url:"*://www.youtube.com/*"}, logTabs);

    // chrome.tabs.getSelected(null, function (tab) {
    //   var url = new URL(tab.url);
    //   var domain = url.hostname;
    //   // `domain` now has a value like 'example.com'
    // });
    // if(domain.includes('youtube')){
    //     var x = document.getElementsByClassName("yt-uix-scroller-scroll-unit  currently-playing");

    //     console.log(x);
    // }
  }
});



