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
/***/ (function(module, exports) {

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
	      var currentSong = document.getElementsByClassName("title style-scope ytd-video-primary-info-renderer")[0].innerText;
	      //document.getElementById("eow-title");
	      checkAndDelete(currentSong, list);
	    }
	  });
	}
	
	function checkAndDelete(currentSong, artistList) {
	  if (!artistList.length) {
	    return NULL;
	  } else {
	    var title = currentSong.toLowerCase();
	    for (var i = 0; i < artistList.length; i++) {
	      if (title.includes(artistList[i].toLowerCase())) {
	        var next = document.getElementsByClassName("ytp-next-button ytp-button")[0];
	        next.click();
	        console.log("removed: " + title + "from your playlist");
	        return;
	      }
	    }
	  }
	}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2FjNTQzNzEzNjNmMTc5ZmU5MTE/YjhiOCIsIndlYnBhY2s6Ly8vLi9qcy9jb250ZW50L2JhblRoZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxTQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0E7QUFDQSxhQUFZLFVBQVosRUFBd0IsSUFBeEI7QUFDQSxTQUFRLEdBQVIsQ0FBWSxLQUFaOztBQUdBLFVBQVMsVUFBVCxHQUFxQjtBQUNuQixVQUFPLE9BQVAsQ0FBZSxJQUFmLENBQW9CLEdBQXBCLENBQXdCLFNBQXhCLEVBQW1DLFVBQVMsSUFBVCxFQUFjO0FBQy9DLFNBQUcsQ0FBQyxJQUFELElBQVMsQ0FBQyxLQUFLLE9BQWYsSUFBMEIsQ0FBQyxLQUFLLE9BQUwsQ0FBYSxNQUEzQyxFQUFrRDtBQUNoRCxlQUFRLEdBQVIsQ0FBWSx3QkFBWjtBQUNELE1BRkQsTUFFSztBQUNILFdBQUksT0FBTyxLQUFLLE9BQWhCO0FBQ0EsV0FBSSxjQUFjLFNBQVMsc0JBQVQsQ0FBZ0MsbURBQWhDLEVBQXFGLENBQXJGLEVBQXdGLFNBQTFHO0FBQ0E7QUFDQSxzQkFBZSxXQUFmLEVBQTJCLElBQTNCO0FBQ0Q7QUFDRixJQVREO0FBVUQ7O0FBRUQsVUFBUyxjQUFULENBQXdCLFdBQXhCLEVBQXFDLFVBQXJDLEVBQWdEO0FBQzlDLE9BQUksQ0FBQyxXQUFXLE1BQWhCLEVBQXVCO0FBQ3JCLFlBQU8sSUFBUDtBQUNELElBRkQsTUFFSztBQUNILFNBQUksUUFBUSxZQUFZLFdBQVosRUFBWjtBQUNBLFVBQUksSUFBSSxJQUFFLENBQVYsRUFBYSxJQUFFLFdBQVcsTUFBMUIsRUFBa0MsR0FBbEMsRUFBdUM7QUFDckMsV0FBRyxNQUFNLFFBQU4sQ0FBZSxXQUFXLENBQVgsRUFBYyxXQUFkLEVBQWYsQ0FBSCxFQUErQztBQUM3QyxhQUFJLE9BQU8sU0FBUyxzQkFBVCxDQUFnQyw0QkFBaEMsRUFBOEQsQ0FBOUQsQ0FBWDtBQUNBLGNBQUssS0FBTDtBQUNBLGlCQUFRLEdBQVIsQ0FBWSxjQUFjLEtBQWQsR0FBc0Isb0JBQWxDO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7QUFDRixFIiwiZmlsZSI6ImJ1aWxkL2NvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzYWM1NDM3MTM2M2YxNzlmZTkxMSIsImNvbnNvbGUubG9nKFwiSEVMTE9cIik7XG5iYW5BcnRpc3RzKCk7XG5zZXRJbnRlcnZhbChiYW5BcnRpc3RzLCAyMDAwKTtcbmNvbnNvbGUubG9nKFwiRE9HXCIpO1xuXG5cbmZ1bmN0aW9uIGJhbkFydGlzdHMoKXtcbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoXCJhcnRpc3RzXCIsIGZ1bmN0aW9uKGRhdGEpe1xuICAgIGlmKCFkYXRhIHx8ICFkYXRhLmFydGlzdHMgfHwgIWRhdGEuYXJ0aXN0cy5sZW5ndGgpe1xuICAgICAgY29uc29sZS5sb2coXCJubyBhcnRpc3RzIGluIHRoZSBsaXN0XCIpO1xuICAgIH1lbHNle1xuICAgICAgbGV0IGxpc3QgPSBkYXRhLmFydGlzdHM7XG4gICAgICBsZXQgY3VycmVudFNvbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGl0bGUgc3R5bGUtc2NvcGUgeXRkLXZpZGVvLXByaW1hcnktaW5mby1yZW5kZXJlclwiKVswXS5pbm5lclRleHQ7XG4gICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW93LXRpdGxlXCIpO1xuICAgICAgY2hlY2tBbmREZWxldGUoY3VycmVudFNvbmcsbGlzdCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tBbmREZWxldGUoY3VycmVudFNvbmcsIGFydGlzdExpc3Qpe1xuICBpZiAoIWFydGlzdExpc3QubGVuZ3RoKXtcbiAgICByZXR1cm4gTlVMTDtcbiAgfWVsc2V7XG4gICAgbGV0IHRpdGxlID0gY3VycmVudFNvbmcudG9Mb3dlckNhc2UoKTtcbiAgICBmb3IodmFyIGk9MDsgaTxhcnRpc3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZih0aXRsZS5pbmNsdWRlcyhhcnRpc3RMaXN0W2ldLnRvTG93ZXJDYXNlKCkpKXtcbiAgICAgICAgbGV0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwieXRwLW5leHQtYnV0dG9uIHl0cC1idXR0b25cIilbMF07XG4gICAgICAgIG5leHQuY2xpY2soKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmVkOiBcIiArIHRpdGxlICsgXCJmcm9tIHlvdXIgcGxheWxpc3RcIilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY29udGVudC9iYW5UaGVtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==