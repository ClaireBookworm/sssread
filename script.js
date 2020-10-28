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

function hash(inp) {
    return inp;
}

function signUp1() {
    var uname = document.getElementsByName("username")[0].value;
    console.log(document.getElementsByName("username")[0].value)
    var pword = document.getElementsByName("psw")[0].value;
    document.cookie = "username="+encodeURIComponent(hash(uname))+"; path=/; max-age=31536000";
    document.cookie = "password="+encodeURIComponent(hash(uname))+"; path=/; max-age=31536000";
    var signalert = "You've signed up! Snakespeare is happy ÃƒÂ°Ã…Â¸Ã‚Â¥Ã‚Â°";
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

    if (myBool) {
	alert("Successfully logged in! Welcome back, " + uname + "! If you want to access your profile, go to https://sssread.netlify.app/profile.html. Now, go do some reading! Ã°Å¸â€œÅ¡");
	document.cookie = "login=; path=/; expires=Thu 01 Jan 1970 00:00:00 GMT";
	document.cookie = "login="+encodeURIComponent(uname)+"; path=/; max-age=2419200";
    } else if (myBool = false) {
	alert("Your username and/or password is incorrect...maybe you put a blank space in one of the fields...Snakespeare is sad Ã°Å¸ËœÂ­");
    } else {
	 alert("You shouldn't be getting this alert....uh oh Ã°Å¸Ëœâ€“");   
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

// THANK YOU SO MUCH NATHAN!!! :)))))
