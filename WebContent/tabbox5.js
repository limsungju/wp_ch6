var tabBox = {
	onTabClicked: function(event) {
		var lisSelected = document.getElementsByClassName("selected");
		
		// unselected
		(lisSelected.length == 1) && (lisSelected[0].className = ""); // 아래 코드와 동일한 코드 (자바스크립트에서만 가능)
		/* if(lisSelected.length == 1) {
			lisSelected[0].className = "";
		} */
		this.className = "selected";
	},
	init: function() {
		console.log(this);
		var div = document.getElementsByClassName("tab-box")[0];
		var ul = div.childNodes[1];
		var lis = ul.getElementsByTagName("li"); // li태그 빼오기
		
		for(var i = 0; i < lis.length; i++) {
			lis[i].addEventListener("click", this.onTabClicked);
		}
	}
};