// why hello there this is still sophia and i have figured out your name mwahahahaha
//Heyyy! Let's start a convo!
// wait...i saw you typing on cam soooooo *evil laugh*
// shall i try to guess your name (still same person as above)
// also whats a good term for this...comment convo?

//Hello!
//hey
//sooo, wanna chat?
//sure!
//butterflies
//???
//I'm grasping at straws here
//Lol, same.
//By the way, who are you?
//you'll never guess
//yeah, I have no idea

// btw i have no idea who those two people are maybe K and V...or K and C...or C and V *shrugs* - sophia

var editorExtensionId = "mjaamccdenahehjndbkpnbjbodieknma";

chrome.runtime.sendMessage(editorExtensionId, {message: "hi"}, (response) => {
  console.log(response.message);
}); 

/*chrome.runtime.sendMessage(editorExtensionId, {openUrlInEditor: url},
  function(response) {
    if (!response.success)
      handleError(url);
  });*/

let ws = new WebSocket("wss://aefeafaefa.haha0201.repl.co");
let loginKey = null;
ws.binaryType = "arraybuffer"
ws.onopen = () => {
  console.log("WS OPENED")
}

function signUp1() {
  let emailValue = document.getElementsByName("email")[0].value;
  let usernameValue = document.getElementsByName("username")[0].value;
  let passwordValue = document.getElementsByName("psw")[0].value;
  let passwordValue2 = document.getElementsByName("psw-repeat")[0].value;
  if (usernameValue.length < 1){
    alert("You need to have a username 🤪")
  } else if (passwordValue.length < 1){
    alert("You need to have a password 😎")
  } else if (passwordValue != passwordValue2){
    alert("Oops! Your passwords do not match 😱")
  } else if (passwordValue.length < 5){
    alert("Please make your password longer so that its safe 🧐")
  } else{
  ws.send(msgpack.encode({
    type: "register",
    email: emailValue,
    username: usernameValue,
    password: passwordValue,
  }));
  }

    //time to do some magic.!!!!!!!!!!!!!!
}

sessionStorage.setItem("loginKey", loginKey);







function login1() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  ws.send(msgpack.encode({
    type: "login",
    username: username,
    password: password
  }))
}


ws.addEventListener("message", ( datas ) => {
  const msg = msgpack.decode(new Uint8Array(datas.data));
  if (msg.type == "registerFailure"){
    alert("Register failed. Reason: "+msg.reason)
  }
  else if (msg.type == "registerSuccess"){
    alert("Yay, you were able to register! 😉");
  }
  else if (msg.type == "loginFailure"){
    alert("Login failed. Reason: "+msg.reason)
  }
  else if (msg.type == "loginSuccess"){
    alert("Yay, you were able to login! 😉");
    window.location.replace("profile.html");
  }

  
});



/*
function hash(inp) {
    return inp;
}

function signUp1() {
    var uname = document.getElementsByName("username")[0].value;
    console.log(document.getElementsByName("username")[0].value)
    var pword = document.getElementsByName("psw")[0].value;
    document.cookie = "username="+encodeURIComponent(hash(uname))+"; path=/; max-age=31536000";
    document.cookie = "password="+encodeURIComponent(hash(pword))+"; path=/; max-age=31536000";
    var signalert = "You've signed up! Snakespeare is happy 🤗";
    alert(signalert);
    document.cookie = "login=; path=/; expires=Fri 01 Jan 2100 00:00:00 GMT";
    if (document.getElementsByName("remember")[0].checked) {
	document.cookie = "login="+encodeURIComponent(uname)+"; path=/; max-age=2419200";
    }
    window.location.replace = "https://en.wikipedia.org/wiki/HTTP_404";
    return uname;
    return pword;
}

function login1() {
    var cooks = document.cookie;
    var c = [cooks.indexOf("username="), cooks.indexOf("password=")];
    c[0] = cooks.substring((c[0]+9), cooks.length);
    c[1] = cooks.substring((c[1]+9), cooks.length);
    c[0] = c[0].substring(0, c[0].indexOf(";"));
    c[1] = c[1].substring(0, c[1].indexOf(";"));

    var myBool = (hash(uname) == decodeURIComponent(c[0]));
    if ((hash(pword) == decodeURIComponent(c[1])) && myBool) {
	myBool = true;
    } else {
	myBool = false;
    }
    if (uname == "" && pword == "") {
	var fillformoutpls = "Uhh...you know you have to fill the form out, right? 🤪";
	    alert(fillformoutpls); 
    }

    if (myBool) {
	var readingtime = "Successfully logged in! Welcome back, " + uname + "! Now, go do some reading! 📚";
	alert(readingtime);
	document.cookie = "login=; path=/; expires=Thu 01 Jan 1970 00:00:00 GMT";
	document.cookie = "login="+encodeURIComponent(uname)+"; path=/; max-age=2419200";
    } else if (myBool = false) {
	var sadsnake = "Your username and/or password is incorrect...maybe you put a blank space in one of the fields...Snakespeare is sad 😭"
	    alert(sadsnake);
    } else {
	 var uhoh = "You shouldn't be getting this alert....uh oh 😖";
	 alert(uhoh);   
    }
	return uname;
	return pword;
}

function profile() {
	var username = document.cookie;
	let tempIndex = username.indexOf("login=")+6;
	if (tempIndex < 6) {
	    window.location.href = "login.html";
	} else {
	    username = username.substring(tempIndex, username.length);
	    username = username.substring(0, username.indexOf(";"));
	    username = decodeURIComponent(username);
	    document.querySelectorAll('p')[6].innerHTML = "<strong>Username:</strong> "+username;
	}
}
*/
// THANK YOU SO MUCH NATHAN!!! :))))) Nvm his code got replaced LOLOLOLOLOL

