// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete') {
//     console.log("it runs!!!");
//     chrome.tabs.getSelected(null, function (tab) {
//       var url = new URL(tab.url);
//       var domain = url.hostname;
//       // `domain` now has a value like 'example.com'
//       });
//       if(domain.includes('youtube')){
//         var x = document.getElementsByClassName("yt-uix-scroller-scroll-unit  currently-playing");

//         console.log(x);
//       }
//   }
// })