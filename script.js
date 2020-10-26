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
function signUp1() {
    var uname = document.getElementsByName("username")[0].value;
    var pword = document.getElementsByName("psw")[0].value;
    document.cookie = "username="+encodeURIComponent(hash(uname))+"; path=/; max-age=31536000";
    document.cookie = "password="+encodeURIComponent(hash(uname))+"; path=/; max-age=31536000";
    alert("You've signed up! Snakespeare is happy :-)");
}

function signUp2() {
    var uname = document.getElementsByName("username")[0].value;
    var pword = document.getElementsByName("psw")[0].value;     
    localStorage.setItem("username", encodeURIComponent(hash(uname)));
    localStorage.setItem("password", encodeURIComponent(hash(uname)));
}
