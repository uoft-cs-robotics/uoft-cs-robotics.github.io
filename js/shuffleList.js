

var peopleType = document.getElementsByClassName("people");
var j = 0;
for (j = 0; j< peopleType.length;  j++) {
	var pList = peopleType[j]
	if (pList.children.length >1 ){
		for (var i = pList.children.length; i >= 0; i--) {
			pList.appendChild(pList.children[Math.random() * i | 0]);
		}		
	}
	
}


