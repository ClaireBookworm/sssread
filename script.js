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
    var signalert = "You've signed up! Snakespeare is happy ðŸ¥°";
    alert(signalert);
    window.location.replace = "https://en.wikipedia.org/wiki/HTTP_404";
}

function signUp2() {
    var uname = document.getElementsByName("username")[0].value;
    var pword = document.getElementsByName("psw")[0].value;     
    localStorage.setItem("username", encodeURIComponent(hash(uname)));
    localStorage.setItem("password", encodeURIComponent(hash(uname)));
}


			function login1() {
    var uname = document.getElementsByName("username")[0].value;
    var pword = document.getElementsByName("psw")[0].value;

    var cooks = document.cookie;
    var c = [cooks.indexOf("username="), cooks.indexOf("password=")];
    c[0] = cooks.substring((c[0]+9), cooks.length);
    c[1] = cooks.substring((c[1]+9), cooks.length);
    c[0] = c[0].substring(0, c[0].indexOf(";"));
    c[1] = c[1].substring(0, c[1].indexOf(";"));

    var myBool = (hash(uname) == c[0]);
    if ((hash(pword) == c[1]) && myBool) {
	myBool = true;
    } else {
	myBool = false;
    }

    if (myBool) {
	alert("Successfully logged in!\nWelcome back " + uname);
    } else {
	alert("Incorrect username and/or password! Try again!");
    }
}

function login2() {
    var uname = document.getElementsByName("username")[0].value;
    var pword = document.getElementsByName("psw")[0].value;

    var myBool = (hash(uname).toString() == (localStorage.getItem("username")));

    if ((hash(pword).toString() == (localStorage.getItem("password"))) && myBool) {
	myBool = true;
    } else {
	myBool = false;
    }

    if (myBool = true) {
	alert("Successfully logged in!\nWelcome back " + uname + "! Now, go do some reading! 📚");
	window.location.href = "https://sssread.netlify.app/index.html";
    } else {
	alert("Incorrect username and/or password...Snakespeare is sad 😭");
    }
}
// THANK YOU SO MUCH NATHAN!!! :)))))
