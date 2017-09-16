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

	"use strict";
	
	console.log("HELLO");
	banArtists();
	setInterval(banArtists, 2000);
	console.log("DOG");
	
	function banArtists() {
	  chrome.storage.sync.get("artists", function (data) {
	    if (!data || !data.artists || !data.artists.length) {
	      console.log("no artists in the list");
	    } else {
	      var list = data.artists;
	      var currentSong = document.getElementById("eow-title");
	      checkAndDelete(currentSong, list);
	    }
	  });
	}
	
	function checkAndDelete(currentSong, artistList) {
	  if (!artistList.length) {
	    return NULL;
	  } else {
	    var title = currentSong.getAttribute("title").toLowerCase();
	    for (var i = 0; i < artistList.length; i++) {
	      if (title.includes(artistList[i].toLowerCase())) {
	        var next = document.getElementsByClassName("ytp-next-button ytp-button")[0];
	        next.click();
	        console.log("removed: " + currentSong.getAttribute("title") + "from your playlist");
	        return;
	      }
	    }
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDIxODY5YTljYWMwZjFjMzlhOGI/YTE3NyIsIndlYnBhY2s6Ly8vLi9qcy9jb250ZW50L2JhblRoZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxTQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0E7QUFDQSxhQUFZLFVBQVosRUFBd0IsSUFBeEI7QUFDQSxTQUFRLEdBQVIsQ0FBWSxLQUFaOztBQUdBLFVBQVMsVUFBVCxHQUFxQjtBQUNuQixVQUFPLE9BQVAsQ0FBZSxJQUFmLENBQW9CLEdBQXBCLENBQXdCLFNBQXhCLEVBQW1DLFVBQVMsSUFBVCxFQUFjO0FBQy9DLFNBQUcsQ0FBQyxJQUFELElBQVMsQ0FBQyxLQUFLLE9BQWYsSUFBMEIsQ0FBQyxLQUFLLE9BQUwsQ0FBYSxNQUEzQyxFQUFrRDtBQUNoRCxlQUFRLEdBQVIsQ0FBWSx3QkFBWjtBQUNELE1BRkQsTUFFSztBQUNILFdBQUksT0FBTyxLQUFLLE9BQWhCO0FBQ0EsV0FBSSxjQUFjLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUFsQjtBQUNBLHNCQUFlLFdBQWYsRUFBMkIsSUFBM0I7QUFDRDtBQUNGLElBUkQ7QUFTRDs7QUFFRCxVQUFTLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBckMsRUFBZ0Q7QUFDOUMsT0FBSSxDQUFDLFdBQVcsTUFBaEIsRUFBdUI7QUFDckIsWUFBTyxJQUFQO0FBQ0QsSUFGRCxNQUVLO0FBQ0gsU0FBSSxRQUFRLFlBQVksWUFBWixDQUF5QixPQUF6QixFQUFrQyxXQUFsQyxFQUFaO0FBQ0EsVUFBSSxJQUFJLElBQUUsQ0FBVixFQUFhLElBQUUsV0FBVyxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUNyQyxXQUFHLE1BQU0sUUFBTixDQUFlLFdBQVcsQ0FBWCxFQUFjLFdBQWQsRUFBZixDQUFILEVBQStDO0FBQzdDLGFBQUksT0FBTyxTQUFTLHNCQUFULENBQWdDLDRCQUFoQyxFQUE4RCxDQUE5RCxDQUFYO0FBQ0EsY0FBSyxLQUFMO0FBQ0EsaUJBQVEsR0FBUixDQUFZLGNBQWMsWUFBWSxZQUFaLENBQXlCLE9BQXpCLENBQWQsR0FBa0Qsb0JBQTlEO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7QUFDRixFIiwiZmlsZSI6ImJ1aWxkL2NvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDQyMTg2OWE5Y2FjMGYxYzM5YThiXG4gKiovIiwiY29uc29sZS5sb2coXCJIRUxMT1wiKTtcbmJhbkFydGlzdHMoKTtcbnNldEludGVydmFsKGJhbkFydGlzdHMsIDIwMDApO1xuY29uc29sZS5sb2coXCJET0dcIik7XG5cblxuZnVuY3Rpb24gYmFuQXJ0aXN0cygpe1xuICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChcImFydGlzdHNcIiwgZnVuY3Rpb24oZGF0YSl7XG4gICAgaWYoIWRhdGEgfHwgIWRhdGEuYXJ0aXN0cyB8fCAhZGF0YS5hcnRpc3RzLmxlbmd0aCl7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vIGFydGlzdHMgaW4gdGhlIGxpc3RcIik7XG4gICAgfWVsc2V7XG4gICAgICBsZXQgbGlzdCA9IGRhdGEuYXJ0aXN0cztcbiAgICAgIGxldCBjdXJyZW50U29uZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW93LXRpdGxlXCIpO1xuICAgICAgY2hlY2tBbmREZWxldGUoY3VycmVudFNvbmcsbGlzdCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tBbmREZWxldGUoY3VycmVudFNvbmcsIGFydGlzdExpc3Qpe1xuICBpZiAoIWFydGlzdExpc3QubGVuZ3RoKXtcbiAgICByZXR1cm4gTlVMTDtcbiAgfWVsc2V7XG4gICAgbGV0IHRpdGxlID0gY3VycmVudFNvbmcuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikudG9Mb3dlckNhc2UoKTtcbiAgICBmb3IodmFyIGk9MDsgaTxhcnRpc3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZih0aXRsZS5pbmNsdWRlcyhhcnRpc3RMaXN0W2ldLnRvTG93ZXJDYXNlKCkpKXtcbiAgICAgICAgbGV0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwieXRwLW5leHQtYnV0dG9uIHl0cC1idXR0b25cIilbMF07XG4gICAgICAgIG5leHQuY2xpY2soKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmVkOiBcIiArIGN1cnJlbnRTb25nLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpICsgXCJmcm9tIHlvdXIgcGxheWxpc3RcIilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qcy9jb250ZW50L2JhblRoZW0uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9