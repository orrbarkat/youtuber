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
	setInterval(banArtists, 60000);
	console.log("DOG");
	
	function banArtists() {
	  chrome.storage.sync.get("artists", function (data) {
	    console.log(data);
	    if (!data) {
	      console.log("no artists in the list");
	    } else {
	      var list = data.artists;
	      console.log(list);
	      var songs = document.getElementsByClassName("yt-uix-scroller-scroll-unit");
	      for (var i = 0; i < songs.length; i++) {
	        checkAndDelete(songs[i], list);
	      }
	    }
	  });
	}
	
	function checkAndDelete(element, artistList) {
	  if (!artistList.length) {
	    return NULL;
	  } else {
	    for (var i = 0; i < artistList.length; i++) {
	      if (element.dataset.videoTitle.includes(artistList[i])) {
	        console.log("removed: " + element.dataset.videoTitle + "from your playlist");
	        element.parentNode.removeChild(element);
	        break;
	      }
	    }
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjMxOTcwYTI5ZDRlMDMyMzNkNzIiLCJ3ZWJwYWNrOi8vLy4vanMvY29udGVudC9iYW5UaGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsU0FBUSxHQUFSLENBQVksT0FBWjtBQUNBO0FBQ0EsYUFBWSxVQUFaLEVBQXdCLEtBQXhCO0FBQ0EsU0FBUSxHQUFSLENBQVksS0FBWjs7QUFHQSxVQUFTLFVBQVQsR0FBcUI7QUFDbkIsVUFBTyxPQUFQLENBQWUsSUFBZixDQUFvQixHQUFwQixDQUF3QixTQUF4QixFQUFtQyxVQUFTLElBQVQsRUFBYztBQUMvQyxhQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsU0FBRyxDQUFDLElBQUosRUFBUztBQUNQLGVBQVEsR0FBUixDQUFZLHdCQUFaO0FBQ0QsTUFGRCxNQUVLO0FBQ0gsV0FBSSxPQUFPLEtBQUssT0FBaEI7QUFDQSxlQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsV0FBSSxRQUFRLFNBQVMsc0JBQVQsQ0FBZ0MsNkJBQWhDLENBQVo7QUFDQSxZQUFJLElBQUksSUFBRSxDQUFWLEVBQWEsSUFBRSxNQUFNLE1BQXJCLEVBQTZCLEdBQTdCLEVBQWlDO0FBQy9CLHdCQUFlLE1BQU0sQ0FBTixDQUFmLEVBQXdCLElBQXhCO0FBQ0Q7QUFDRjtBQUNGLElBWkQ7QUFhRDs7QUFFRCxVQUFTLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBakMsRUFBNEM7QUFDMUMsT0FBSSxDQUFDLFdBQVcsTUFBaEIsRUFBdUI7QUFDckIsWUFBTyxJQUFQO0FBQ0QsSUFGRCxNQUVLO0FBQ0gsVUFBSSxJQUFJLElBQUUsQ0FBVixFQUFhLElBQUUsV0FBVyxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUNyQyxXQUFHLFFBQVEsT0FBUixDQUFnQixVQUFoQixDQUEyQixRQUEzQixDQUFvQyxXQUFXLENBQVgsQ0FBcEMsQ0FBSCxFQUFzRDtBQUNwRCxpQkFBUSxHQUFSLENBQVksY0FBYyxRQUFRLE9BQVIsQ0FBZ0IsVUFBOUIsR0FBMkMsb0JBQXZEO0FBQ0EsaUJBQVEsVUFBUixDQUFtQixXQUFuQixDQUErQixPQUEvQjtBQUNBO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsRSIsImZpbGUiOiJidWlsZC9jb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBiMzE5NzBhMjlkNGUwMzIzM2Q3MlxuICoqLyIsImNvbnNvbGUubG9nKFwiSEVMTE9cIik7XG5iYW5BcnRpc3RzKCk7XG5zZXRJbnRlcnZhbChiYW5BcnRpc3RzLCA2MDAwMCk7XG5jb25zb2xlLmxvZyhcIkRPR1wiKTtcblxuXG5mdW5jdGlvbiBiYW5BcnRpc3RzKCl7XG4gIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFwiYXJ0aXN0c1wiLCBmdW5jdGlvbihkYXRhKXtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBpZighZGF0YSl7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vIGFydGlzdHMgaW4gdGhlIGxpc3RcIik7XG4gICAgfWVsc2V7XG4gICAgICBsZXQgbGlzdCA9IGRhdGEuYXJ0aXN0cztcbiAgICAgIGNvbnNvbGUubG9nKGxpc3QpO1xuICAgICAgbGV0IHNvbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInl0LXVpeC1zY3JvbGxlci1zY3JvbGwtdW5pdFwiKTtcbiAgICAgIGZvcihsZXQgaT0wOyBpPHNvbmdzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY2hlY2tBbmREZWxldGUoc29uZ3NbaV0sbGlzdCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tBbmREZWxldGUoZWxlbWVudCwgYXJ0aXN0TGlzdCl7XG4gIGlmICghYXJ0aXN0TGlzdC5sZW5ndGgpe1xuICAgIHJldHVybiBOVUxMO1xuICB9ZWxzZXtcbiAgICBmb3IodmFyIGk9MDsgaTxhcnRpc3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihlbGVtZW50LmRhdGFzZXQudmlkZW9UaXRsZS5pbmNsdWRlcyhhcnRpc3RMaXN0W2ldKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlZDogXCIgKyBlbGVtZW50LmRhdGFzZXQudmlkZW9UaXRsZSArIFwiZnJvbSB5b3VyIHBsYXlsaXN0XCIpXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2pzL2NvbnRlbnQvYmFuVGhlbS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=