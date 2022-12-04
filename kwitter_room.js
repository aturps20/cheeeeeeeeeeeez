const firebaseConfig = {
      apiKey: "AIzaSyD2VMPQEcSJcxoOOAIJklOekDsOavNYzrA",
      authDomain: "c94-4d80d.firebaseapp.com",
      databaseURL: "https://c94-4d80d-default-rtdb.firebaseio.com",
      projectId: "c94-4d80d",
      storageBucket: "c94-4d80d.appspot.com",
      messagingSenderId: "1029432260044",
      appId: "1:1029432260044:web:f0d26e86cc5d2d38899969"
    };
  
    firebase.initializeApp(firebaseConfig);

    var user_name = localStorage.getItem('user_name');
    document.getElementById('user_name').innerHTML = "Welcome " + user_name + "!";

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
      
      console.log("name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' > #"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML = row;
      
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}