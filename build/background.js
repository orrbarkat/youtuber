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
	
	var list = ["יובל דיין", "מוש בן ארי", "אליעד"];
	
	function logTabs(tabs) {
	  console.log(tabs);
	  if (tabs.length != 0) {
	    var youtubeId = tabs[0].id;
	    // document.getElementsById("currently-playing");
	    console.log(youtubeId);
	    chrome.tabs.executeScript(youtubeId, { file: "content.js" });
	  }
	}
	chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	  if (changeInfo.status == 'complete') {
	    console.log("it logs!!!");
	
	    chrome.tabs.query({ url: "*://www.youtube.com/*" }, logTabs);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDM0YWU1ODA0MzcwYTIzMjg5NTkiLCJ3ZWJwYWNrOi8vLy4vanMvYmFja2dyb3VuZC9iZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQSxLQUFJLE9BQU8sQ0FDVCxXQURTLEVBRVQsWUFGUyxFQUdULE9BSFMsQ0FBWDs7QUFNQSxVQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUI7QUFDckIsV0FBUSxHQUFSLENBQVksSUFBWjtBQUNBLE9BQUcsS0FBSyxNQUFMLElBQWUsQ0FBbEIsRUFBb0I7QUFDcEIsU0FBSSxZQUFZLEtBQUssQ0FBTCxFQUFRLEVBQXhCO0FBQ0E7QUFDQSxhQUFRLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsWUFBTyxJQUFQLENBQVksYUFBWixDQUEyQixTQUEzQixFQUFzQyxFQUFFLE1BQU0sWUFBUixFQUF0QztBQUNDO0FBR0Y7QUFDRCxRQUFPLElBQVAsQ0FBWSxTQUFaLENBQXNCLFdBQXRCLENBQW1DLFVBQVUsS0FBVixFQUFpQixVQUFqQixFQUE2QixHQUE3QixFQUFrQztBQUNuRSxPQUFJLFdBQVcsTUFBWCxJQUFxQixVQUF6QixFQUFxQztBQUNuQyxhQUFRLEdBQVIsQ0FBWSxZQUFaOztBQUlBLFlBQU8sSUFBUCxDQUFZLEtBQVosQ0FBa0IsRUFBQyxLQUFJLHVCQUFMLEVBQWxCLEVBQWlELE9BQWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDRDtBQUNGLEVBbkJELEUiLCJmaWxlIjoiYnVpbGQvYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNDM0YWU1ODA0MzcwYTIzMjg5NTlcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBsaXN0ID0gW1xuICBcIteZ15XXkdecINeT15nXmdefXCIsXG4gIFwi157XldepINeR158g15DXqNeZXCIsXG4gIFwi15DXnNeZ16LXk1wiXG5dO1xuXG5mdW5jdGlvbiBsb2dUYWJzKHRhYnMpIHtcbiAgY29uc29sZS5sb2codGFicyk7XG4gIGlmKHRhYnMubGVuZ3RoICE9IDApe1xuICB2YXIgeW91dHViZUlkID0gdGFic1swXS5pZDtcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUlkKFwiY3VycmVudGx5LXBsYXlpbmdcIik7XG4gIGNvbnNvbGUubG9nKHlvdXR1YmVJZCk7XG4gIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQoIHlvdXR1YmVJZCwgeyBmaWxlOiBcImNvbnRlbnQuanNcIn0pO1xuICB9XG5cblxufVxuY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCBmdW5jdGlvbiAodGFiSWQsIGNoYW5nZUluZm8sIHRhYikge1xuICBpZiAoY2hhbmdlSW5mby5zdGF0dXMgPT0gJ2NvbXBsZXRlJykge1xuICAgIGNvbnNvbGUubG9nKFwiaXQgbG9ncyEhIVwiKTtcblxuXG5cbiAgICBjaHJvbWUudGFicy5xdWVyeSh7dXJsOlwiKjovL3d3dy55b3V0dWJlLmNvbS8qXCJ9LCBsb2dUYWJzKTtcblxuICAgIC8vIGNocm9tZS50YWJzLmdldFNlbGVjdGVkKG51bGwsIGZ1bmN0aW9uICh0YWIpIHtcbiAgICAvLyAgIHZhciB1cmwgPSBuZXcgVVJMKHRhYi51cmwpO1xuICAgIC8vICAgdmFyIGRvbWFpbiA9IHVybC5ob3N0bmFtZTtcbiAgICAvLyAgIC8vIGBkb21haW5gIG5vdyBoYXMgYSB2YWx1ZSBsaWtlICdleGFtcGxlLmNvbSdcbiAgICAvLyB9KTtcbiAgICAvLyBpZihkb21haW4uaW5jbHVkZXMoJ3lvdXR1YmUnKSl7XG4gICAgLy8gICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInl0LXVpeC1zY3JvbGxlci1zY3JvbGwtdW5pdCAgY3VycmVudGx5LXBsYXlpbmdcIik7XG5cbiAgICAvLyAgICAgY29uc29sZS5sb2coeCk7XG4gICAgLy8gfVxuICB9XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vanMvYmFja2dyb3VuZC9iZy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=