let ws = new WebSocket("wss://sssread-backend.glitch.me");
ws.binaryType = "arraybuffer"

let editingValue = "monthly";

const avatarOptions = {
  "Snakespeare the Scholar": 0,
  "Snakespeare with Glasses": 0,
  "Basic Snakespeare": 0,
  "Unicorn Snakespeare": 10000,
  "Retro Snakespeare": 100000,
  "Rainbow Snake": 1000000
} //CHANGE THE CORRESPONDING CODE IN SERVER/INDEX.JS IF YOU CHANGE THIS

document.getElementById("changeInputButton").onclick = () => {
  document.getElementById("alertBox").style.display = "none";
  //document.getElementById("changeInput").value;
  //modify it
  ws.send(msgpack.encode({
    type: "updateGoals",
    updateValueType: editingValue,
    updateValue: document.getElementById("changeInput").value
  }))

  document.getElementById("changeInput").value = 0;
}

const avatarImages = {
  
}
for(let i of Object.keys(avatarOptions)){
  let newImage = document.createElement("img");
  newImage.classList.add("avatarPreview");
  newImage.setAttribute("src", "./avatars/"+i+".png");
  newImage.setAttribute("width", 200);
  newImage.setAttribute("height", 200);
  newImage.setAttribute("title", "Unlocked at "+avatarOptions[i]+" words read!")
  avatarImages[i] = newImage;
  newImage.onerror =() => {
    console.log("OH NO "+i)
  }
}
//If you want to change this, you need to copy paste these values to the server side (server/index.js). Otherwise, the values will not work properly!

let loginKey = localStorage.getItem("token");

if (loginKey == null){
  alert("You need to login to view this page!")
  window.location.replace("login.html");
}
else{
  ws.onopen = () => {
    ws.send(msgpack.encode({
      type: "loginkey",
      key: loginKey,
      keep: true
    }))
  }
}

let loggedIn = false;

ws.addEventListener("message", ( datas ) => {
  const msg = msgpack.decode(new Uint8Array(datas.data));
  if (msg.type == "loginFailure"){
    alert("Login failed. Reason: "+msg.reason)
    localStorage.setItem("token", null);
    window.location.replace("login.html");
  }
  else if (msg.type == "loginSuccess"){
    loggedIn = true;
    ws.send(msgpack.encode({
      type: "requestInfo"
    }))
    console.log("Logged in")
  }
  else if (msg.type == "info"){
    updateProfile(msg.data);
  }

  
});

function updateProfile(data){
  //Avoid InnerHTML most of the time.
  //It's fine here though, since all data is from server - no XSS is possible.
  console.log(data)
  document.getElementById("usernameInfo").innerHTML = "<strong>Username:</strong> "+data.username;
  document.getElementById("totalWordsRead").innerHTML = "<strong>Total Words Read:</strong> "+data.words_read;
  let buttonForMonthlyGoal = document.createElement('button');
  buttonForMonthlyGoal.innerText = " (Edit)"
  buttonForMonthlyGoal.classList.add("editing");
  buttonForMonthlyGoal.marginLeft = "10px";
  buttonForMonthlyGoal.onclick = () => {
    document.getElementById("alertBox").style.display = "";
    editingValue = "monthly";
    console.log("MONTHLY button click")
  }
  let buttonForYearlyGoal = document.createElement('button');
  buttonForYearlyGoal.innerText = " (Edit)"
  buttonForYearlyGoal.classList.add("editing");
  buttonForYearlyGoal.onclick = () => {
    document.getElementById("alertBox").style.display = "";
    editingValue = "yearly";
    console.log("yearly button click")
  }
  document.getElementById("monthlyGoalInfo").innerHTML = "<strong>Monthly Goal:</strong> "+data.monthly_word_goal[1]+"  ";
  document.getElementById("monthlyGoalInfo").appendChild(buttonForMonthlyGoal);
  
  document.getElementById("yearlyGoalInfo").innerHTML = "<strong>Yearly Goal:</strong> "+data.yearly_word_goal[1]+"  ";
  document.getElementById("yearlyGoalInfo").appendChild(buttonForYearlyGoal);
  
  document.getElementById("monthlyGoalPercentage").innerHTML = "<strong>Monthly Goal:</strong> "+Math.min(Math.round(data.monthly_word_goal[0]/data.monthly_word_goal[1]*1000)/10, 100) + `%`;
  document.getElementById("yearlyGoalPercentage").innerHTML = "<strong>Yearly Goal:</strong> "+Math.min(Math.round(data.yearly_word_goal[0]/data.yearly_word_goal[1]*1000)/10, 100) + `%`;

  document.getElementById("unlockedAvatars").innerHTML = "";
  document.getElementById("lockedAvatars").innerHTML = "";

  for(let i of Object.keys(avatarOptions)){
    if (avatarOptions[i] <= data.words_read){
      //Unlocked
      document.getElementById("unlockedAvatars").appendChild(avatarImages[i])
      if (i == data.avatar){
        avatarImages[i].classList.add("selected");
      }
      else{
        avatarImages[i].classList.remove("selected");
      }
      avatarImages[i].onclick = () => {
        ws.send(msgpack.encode({
          type: "avatarChange",
          newAvatar: i
        }))
      }
    }
    else{
      //Locked
      document.getElementById("lockedAvatars").appendChild(avatarImages[i])
      
    }

    if (avatarOptions[data.avatar] != undefined){
      document.getElementById("mainProfilePicture").setAttribute("src", "./avatars/"+data.avatar+".png");
    }
  }
  //data.avatar
  
  
}

button = document.getElementById("changeInputButton")
alerting = document.getElementById("alertBox")

button.addEventListener('mouseover', () => {
     button.style.backgroundColor = 'black';
     button.style.color = 'white';
     button.style.transform = 'scale(1.3)';

     alertingdiv.style.backgroundColor = '#bf6856';
    });

     button.addEventListener('mouseleave', () => {
         button.style.backgroundColor = '#4944e3';
         button.style.color = 'black';
         button.style.transform = 'scale(1)';

       alertingdiv.style.backgroundColor = '#00A896';
     });
