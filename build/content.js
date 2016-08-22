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
	    if (!data) {
	      console.log("no artists in the list");
	    } else {
	      var list = data.artists;
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
	        // element.children[1].children[0].click();
	        if (element.className.includes("currently-playing")) {
	          element.nextElementSibling.children[1].click();
	        } else {
	          element.parentNode.removeChild(element);
	        }
	        console.log("removed: " + element.dataset.videoTitle + "from your playlist");
	        break;
	      }
	    }
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODkzZDhlMDZmM2JhNDU5MmI3MTYiLCJ3ZWJwYWNrOi8vLy4vanMvY29udGVudC9iYW5UaGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsU0FBUSxHQUFSLENBQVksT0FBWjtBQUNBO0FBQ0EsYUFBWSxVQUFaLEVBQXdCLEtBQXhCO0FBQ0EsU0FBUSxHQUFSLENBQVksS0FBWjs7QUFHQSxVQUFTLFVBQVQsR0FBcUI7QUFDbkIsVUFBTyxPQUFQLENBQWUsSUFBZixDQUFvQixHQUFwQixDQUF3QixTQUF4QixFQUFtQyxVQUFTLElBQVQsRUFBYztBQUMvQyxTQUFHLENBQUMsSUFBSixFQUFTO0FBQ1AsZUFBUSxHQUFSLENBQVksd0JBQVo7QUFDRCxNQUZELE1BRUs7QUFDSCxXQUFJLE9BQU8sS0FBSyxPQUFoQjtBQUNBLFdBQUksUUFBUSxTQUFTLHNCQUFULENBQWdDLDZCQUFoQyxDQUFaO0FBQ0EsWUFBSSxJQUFJLElBQUUsQ0FBVixFQUFhLElBQUUsTUFBTSxNQUFyQixFQUE2QixHQUE3QixFQUFpQztBQUMvQix3QkFBZSxNQUFNLENBQU4sQ0FBZixFQUF3QixJQUF4QjtBQUNEO0FBQ0Y7QUFDRixJQVZEO0FBV0Q7O0FBRUQsVUFBUyxjQUFULENBQXdCLE9BQXhCLEVBQWlDLFVBQWpDLEVBQTRDO0FBQzFDLE9BQUksQ0FBQyxXQUFXLE1BQWhCLEVBQXVCO0FBQ3JCLFlBQU8sSUFBUDtBQUNELElBRkQsTUFFSztBQUNILFVBQUksSUFBSSxJQUFFLENBQVYsRUFBYSxJQUFFLFdBQVcsTUFBMUIsRUFBa0MsR0FBbEMsRUFBdUM7QUFDckMsV0FBRyxRQUFRLE9BQVIsQ0FBZ0IsVUFBaEIsQ0FBMkIsUUFBM0IsQ0FBb0MsV0FBVyxDQUFYLENBQXBDLENBQUgsRUFBc0Q7QUFDcEQ7QUFDQSxhQUFHLFFBQVEsU0FBUixDQUFrQixRQUFsQixDQUEyQixtQkFBM0IsQ0FBSCxFQUFtRDtBQUNqRCxtQkFBUSxrQkFBUixDQUEyQixRQUEzQixDQUFvQyxDQUFwQyxFQUF1QyxLQUF2QztBQUNELFVBRkQsTUFFSztBQUNILG1CQUFRLFVBQVIsQ0FBbUIsV0FBbkIsQ0FBK0IsT0FBL0I7QUFDRDtBQUNELGlCQUFRLEdBQVIsQ0FBWSxjQUFjLFFBQVEsT0FBUixDQUFnQixVQUE5QixHQUEyQyxvQkFBdkQ7QUFDQTtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEUiLCJmaWxlIjoiYnVpbGQvY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgODkzZDhlMDZmM2JhNDU5MmI3MTZcbiAqKi8iLCJjb25zb2xlLmxvZyhcIkhFTExPXCIpO1xuYmFuQXJ0aXN0cygpO1xuc2V0SW50ZXJ2YWwoYmFuQXJ0aXN0cywgNjAwMDApO1xuY29uc29sZS5sb2coXCJET0dcIik7XG5cblxuZnVuY3Rpb24gYmFuQXJ0aXN0cygpe1xuICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChcImFydGlzdHNcIiwgZnVuY3Rpb24oZGF0YSl7XG4gICAgaWYoIWRhdGEpe1xuICAgICAgY29uc29sZS5sb2coXCJubyBhcnRpc3RzIGluIHRoZSBsaXN0XCIpO1xuICAgIH1lbHNle1xuICAgICAgbGV0IGxpc3QgPSBkYXRhLmFydGlzdHM7XG4gICAgICBsZXQgc29uZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwieXQtdWl4LXNjcm9sbGVyLXNjcm9sbC11bml0XCIpO1xuICAgICAgZm9yKGxldCBpPTA7IGk8c29uZ3MubGVuZ3RoOyBpKyspe1xuICAgICAgICBjaGVja0FuZERlbGV0ZShzb25nc1tpXSxsaXN0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja0FuZERlbGV0ZShlbGVtZW50LCBhcnRpc3RMaXN0KXtcbiAgaWYgKCFhcnRpc3RMaXN0Lmxlbmd0aCl7XG4gICAgcmV0dXJuIE5VTEw7XG4gIH1lbHNle1xuICAgIGZvcih2YXIgaT0wOyBpPGFydGlzdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKGVsZW1lbnQuZGF0YXNldC52aWRlb1RpdGxlLmluY2x1ZGVzKGFydGlzdExpc3RbaV0pKXtcbiAgICAgICAgLy8gZWxlbWVudC5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jbGljaygpO1xuICAgICAgICBpZihlbGVtZW50LmNsYXNzTmFtZS5pbmNsdWRlcyhcImN1cnJlbnRseS1wbGF5aW5nXCIpKXtcbiAgICAgICAgICBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jaGlsZHJlblsxXS5jbGljaygpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmVkOiBcIiArIGVsZW1lbnQuZGF0YXNldC52aWRlb1RpdGxlICsgXCJmcm9tIHlvdXIgcGxheWxpc3RcIilcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2pzL2NvbnRlbnQvYmFuVGhlbS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=