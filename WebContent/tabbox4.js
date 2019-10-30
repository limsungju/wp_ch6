var tabBox = {
	liSelected: null,
	onTabClicked: function() { // 클릭을 했을 때 실행
		if(tabBox.liSelected != null) {
			tabBox.liSelected.className = "";
		}
		
		// 선택
		this.className = "selected";
		tabBox.liSelected = this;
	},
	init: function() {
		var div = document.getElementsByClassName("tab-box")[0];
		var ul = div.childNodes[1];
		var lis = ul.getElementsByTagName("li"); // li태그 빼오기
		
		for(var i = 0; i < lis.length; i++) {
			lis[i].onclick = this.onTabClicked;
		}
	}	
};