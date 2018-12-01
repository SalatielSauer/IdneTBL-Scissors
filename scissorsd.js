scd_letters = ["", "-", "_", "|", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function getkey(){
	key = document.getElementById("key").value;
	numofuppers = key.length - key.replace(/[A-Z]/g, '').length;
	numoflowers = key.length - key.replace(/[a-z]/g, '').length;
	keyvalue = 0;
	for (id = 0; id < key.length ; id++){

	 	if (id == (key.length - 1)){
	 		keyvalue = key.length + numofuppers + (scd_letters.indexOf(key[id]) / 5);
	 	};
		//console.log(key + "(" + key[id] + ")" + " = " + keyvalue);

	};
	if (keyvalue >= 100){
		document.getElementById("keylevel").style = "left: 100px";
		document.getElementById("textval").style = "left: 100px; color: springgreen;";
	};
	if (keyvalue <= 0){
		document.getElementById("keylevel").style = "left: 0px";
		document.getElementById("textval").style = "left: 0px; color: white";
	};

	if (keyvalue <= 100 && keyvalue >= 0){
		document.getElementById("keylevel").style = "left: " + keyvalue + "px";
		document.getElementById("textval").style = "left: " + keyvalue + "px";
	};
	document.getElementById("textval").innerText = keyvalue;
	//return keyvalue;
};

function error(par, msg){
	if (par){
		warn = document.getElementById("warning");
		warn.innerText = msg;
		warn.style = "visibility: visible;"
	} else {
		warn.innerText = "";
		warn.style = "visibility: hidden;"
	};
};

function getcode(){
	getkey();
	text = document.getElementById("text");
	code = document.getElementById("code");
	text.value = text.value.replace(/\s/g,'');
	code.value = "";
	for (id = 0; id < text.value.length ; id++){
		code.value = code.value + scd_letters.indexOf(text.value[id]);
		
		if (id == (text.value.length - 1)){
			code.value = (code.value * keyvalue);
			//console.log(code.value * keyvalue);
		};
	};
};

function gettext(){
	getkey();
	text = document.getElementById("text");
	code = document.getElementById("code");

	if (code.value.length <= 50){
		decode = code.value / keyvalue;
		text.value = "";

		for (id = 0; id <= decode.toString().length ; id+=2){
			if (id >= 2){curnum = decode.toString().slice(id - 2, id)} else {curnum = 0};
			console.log(decode, curnum);
			if (typeof scd_letters[curnum] != "undefined"){
				text.value = text.value + scd_letters[curnum];
			};
		};
	};
};

function verifylimit(){
	getkey();
	
	text = document.getElementById("text");
	if (text.value.length >= 14){
		text.value = text.value.substr(0, (text.value.length -1));
		
	};
};