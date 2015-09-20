function submitForm(){
	document.getElementById("demo").innerHTML = "You pressed Submit!";
}

var idNum=0;
function addEducation(){
	document.getElementById("demo").innerHTML = "You pressed the add button!";
	
	var list = document.getElementById("education");
	var index = list.selectedIndex;
	var selected = list.options[index].value;
	
	
	if(selected != "select"){
		var div = document.createElement('div');
		div.id = idNum;
		var newEducation = "\
		<div class=\"row\">\
			<div class=\"col-md-2\"\
				<p>"+selected+"</p>\
			</div>\
			<div class=\"col-md-2\">\
					<input class=\"btn btn-default\" type=\"button\" value=\"Delete\" onclick=\"deleteEducation("+idNum+")\"/>\
			</div>\
		</div>\
		</br>";
		div.innerHTML = newEducation;
		document.getElementById("educationList").appendChild(div);
		idNum += 1;
	}
}

function deleteEducation(id){
	document.getElementById("demo").innerHTML = id;
	document.getElementById(id).remove();
}