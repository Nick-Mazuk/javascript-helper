var arrayInput;
var submit;
var output;

window.addEventListener("load", function(){onLoad();});

function onLoad() {
	arrayInput = document.getElementById("arrayInput");
	submit = document.getElementById("submit");
	output = document.getElementById("output");
	submit.addEventListener("click",function(){deleteDuplicates();});
}

function deleteDuplicates() {
	var array = eval(arrayInput.value);
	var newArray = [];
	for(i = 0; i < array.length; i++) {
		var unique = true;
		for(j = 0; j < i; j++) {
			if(array[i].toString().toLowerCase() == array[j].toString().toLowerCase()) {
				unique = false;
				break;
			}
		}
		if(unique) {
			newArray.push(array[i]);
		}
		console.log(i);
	}
	output.innerHTML = "[\"" + newArray.join("\",\"") + "\"]";
}