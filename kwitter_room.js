
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyBY5y4_AyvNlBLYOk-mCLcGY-yUNFGS6kI",
      authDomain: "letschatwebapp-2.firebaseapp.com",
      projectId: "letschatwebapp-2",
      storageBucket: "letschatwebapp-2.appspot.com",
      messagingSenderId: "329330310998",
      appId: "1:329330310998:web:1369f2b87786bc0c7fa0f7"
    };

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"   
      });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class-'room_name' id="+Room_names+" onclick='ridiectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name")
  window.location="kwitter.html";
}