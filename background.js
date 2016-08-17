/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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
	  chrome.tabs.executeScript( youtubeId, { file: "content.js"});
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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjU5NmU3NzkwYWQxMWE1MTAwYTkiLCJ3ZWJwYWNrOi8vLy4vanMvYmFja2dyb3VuZC9iZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUF5QyxvQkFBb0I7QUFDN0Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsd0JBQXVCLDRCQUE0Qjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFDIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDY1OTZlNzc5MGFkMTFhNTEwMGE5XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGlzdCA9IFtcbiAgXCLXmdeV15HXnCDXk9eZ15nXn1wiLFxuICBcItee15XXqSDXkdefINeQ16jXmVwiLFxuICBcIteQ15zXmdei15NcIlxuXTtcblxuZnVuY3Rpb24gbG9nVGFicyh0YWJzKSB7XG4gIGNvbnNvbGUubG9nKHRhYnMpO1xuICBpZih0YWJzLmxlbmd0aCAhPSAwKXtcbiAgdmFyIHlvdXR1YmVJZCA9IHRhYnNbMF0uaWQ7XG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRzQnlJZChcImN1cnJlbnRseS1wbGF5aW5nXCIpO1xuICBjb25zb2xlLmxvZyh5b3V0dWJlSWQpO1xuICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KCB5b3V0dWJlSWQsIHsgZmlsZTogXCJjb250ZW50LmpzXCJ9KTtcbiAgfVxuXG5cbn1cbmNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lciggZnVuY3Rpb24gKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpIHtcbiAgaWYgKGNoYW5nZUluZm8uc3RhdHVzID09ICdjb21wbGV0ZScpIHtcbiAgICBjb25zb2xlLmxvZyhcIml0IGxvZ3MhISFcIik7XG5cblxuXG4gICAgY2hyb21lLnRhYnMucXVlcnkoe3VybDpcIio6Ly93d3cueW91dHViZS5jb20vKlwifSwgbG9nVGFicyk7XG5cbiAgICAvLyBjaHJvbWUudGFicy5nZXRTZWxlY3RlZChudWxsLCBmdW5jdGlvbiAodGFiKSB7XG4gICAgLy8gICB2YXIgdXJsID0gbmV3IFVSTCh0YWIudXJsKTtcbiAgICAvLyAgIHZhciBkb21haW4gPSB1cmwuaG9zdG5hbWU7XG4gICAgLy8gICAvLyBgZG9tYWluYCBub3cgaGFzIGEgdmFsdWUgbGlrZSAnZXhhbXBsZS5jb20nXG4gICAgLy8gfSk7XG4gICAgLy8gaWYoZG9tYWluLmluY2x1ZGVzKCd5b3V0dWJlJykpe1xuICAgIC8vICAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ5dC11aXgtc2Nyb2xsZXItc2Nyb2xsLXVuaXQgIGN1cnJlbnRseS1wbGF5aW5nXCIpO1xuXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHgpO1xuICAgIC8vIH1cbiAgfVxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvYmFja2dyb3VuZC9iZy5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=