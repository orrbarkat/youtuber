var list = [
  "יובל דיין",
  "מוש בן ארי",
  "אליעד"
];
var song_title = document.getElementById("eow-title");
console.log(song_title.title);
for(var i=0; i<list.length; i++) {
    console.log("title: "+ song_title.title + "not includes " + list[i]);
    if(song_title.title.includes(list[i])){
		var a = document.getElementsByClassName("ytp-next-button ytp-button");
		a[0].click()
		// window.location.href = a[0].href;
	}
}