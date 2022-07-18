var firebaseConfig = {
      apiKey: "AIzaSyA9IG_50emwfpWzMW4IywVeE7sKMd6y0LA",
      authDomain: "kwitter-4f256.firebaseapp.com",
      databaseURL: "https://kwitter-4f256-default-rtdb.firebaseio.com",
      projectId: "kwitter-4f256",
      storageBucket: "kwitter-4f256.appspot.com",
      messagingSenderId: "541102353712",
      appId: "1:541102353712:web:9f59fbbaf8f34c1fa1ecf5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE









function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
