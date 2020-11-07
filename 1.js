function f1() {
alert("Сообщение отправлено");

}

var radio1 = document.getElementsByName('in1');

radio1[0].onchange = f2;
radio1[1].onchange = f2;
radio1[2].onchange = f2;

function f2() {
for (i=0; i<3;i++){
if (radio1[i].checked) {
	document.getElementById('one').src="1.jpg";
	return;
}

else if (radio1[1].checked){ 
	document.getElementById('one').src="2.jpg";
		return;	
}
else {
	document.getElementById('one').src="3.jpg";
		return;	
}	
}	
}





function f3() {


	document.getElementById('pic1').src = "7.jpg";
document.getElementById('out').innerHTML = "Одностворчатое окно KBE";
 document.getElementById("input2").value = "120";
	 document.getElementById("input3").value = "120";
}


function f4() {


	document.getElementById('pic1').src = "8.jpg";
	document.getElementById('out').innerHTML = "Двухстворчатое окно KBE";
	 document.getElementById("input2").value = "240";
		 document.getElementById("input3").value = "120";
}

function f5() {


	document.getElementById('pic1').src = "9.jpg";
document.getElementById('out').innerHTML = "Трехстворчатое окно KBE";
  document.getElementById("input2").value = "360";
		 document.getElementById("input3").value = "120";
}
function f6() {


	document.getElementById('pic1').src = "10.jpg";
	document.getElementById('out').innerHTML = "Балконный блок";
 document.getElementById("input2").value = "360";
		 document.getElementById("input3").value = "220";
}
function f7() {


	document.getElementById('pic1').src = "5.jpg";
		document.getElementById('out').innerHTML = "Остекление балкона";
		 document.getElementById("input2").value = "480";
		 document.getElementById("input3").value = "220";
}




