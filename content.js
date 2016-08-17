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

	console.log("HELLO");
	setTimeout(function(){
	    banArtists();
	}, 10000);
	console.log("DOG");
	
	function banArtists() {
	  let songs = document.getElementsByClassName("yt-uix-scroller-scroll-unit");
	  for(let i=0; i<songs.length; i++){
	    checkAndDelete(songs[i]);
	  }
	}
	
	function checkAndDelete(element){
	  let  artistList = [
	    "יובל דיין",
	    "מוש בן ארי",
	    "אליעד",
	    "סטטיק",
	    "נתן גושן"
	  ];
	  for(var i=0; i<artistList.length; i++) {
	    if(element.dataset.videoTitle.includes(artistList[i])){
	      console.log("removed: " + element.dataset.videoTitle + "from your playlist")
	      element.parentNode.removeChild(element);
	      break;
	    }
	  }
	}


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2EzYWM2MmNhYmI0ZDk5NTU2OWMiLCJ3ZWJwYWNrOi8vLy4vanMvY29udGVudC9iYW5UaGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0EsZUFBYyxnQkFBZ0I7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLHFCQUFxQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjYTNhYzYyY2FiYjRkOTk1NTY5Y1xuICoqLyIsImNvbnNvbGUubG9nKFwiSEVMTE9cIik7XG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgYmFuQXJ0aXN0cygpO1xufSwgMTAwMDApO1xuY29uc29sZS5sb2coXCJET0dcIik7XG5cbmZ1bmN0aW9uIGJhbkFydGlzdHMoKSB7XG4gIGxldCBzb25ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ5dC11aXgtc2Nyb2xsZXItc2Nyb2xsLXVuaXRcIik7XG4gIGZvcihsZXQgaT0wOyBpPHNvbmdzLmxlbmd0aDsgaSsrKXtcbiAgICBjaGVja0FuZERlbGV0ZShzb25nc1tpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tBbmREZWxldGUoZWxlbWVudCl7XG4gIGxldCAgYXJ0aXN0TGlzdCA9IFtcbiAgICBcIteZ15XXkdecINeT15nXmdefXCIsXG4gICAgXCLXnteV16kg15HXnyDXkNeo15lcIixcbiAgICBcIteQ15zXmdei15NcIixcbiAgICBcIteh15jXmNeZ16dcIixcbiAgICBcIteg16rXnyDXkteV16nXn1wiXG4gIF07XG4gIGZvcih2YXIgaT0wOyBpPGFydGlzdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBpZihlbGVtZW50LmRhdGFzZXQudmlkZW9UaXRsZS5pbmNsdWRlcyhhcnRpc3RMaXN0W2ldKSl7XG4gICAgICBjb25zb2xlLmxvZyhcInJlbW92ZWQ6IFwiICsgZWxlbWVudC5kYXRhc2V0LnZpZGVvVGl0bGUgKyBcImZyb20geW91ciBwbGF5bGlzdFwiKVxuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvY29udGVudC9iYW5UaGVtLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==