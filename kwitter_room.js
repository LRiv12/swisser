
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyBNOqWVXCrrgAmqtTrj2V045Fov89DFCNs",
      authDomain: "red-social-e9c66.firebaseapp.com",
      databaseURL: "https://red-social-e9c66-default-rtdb.firebaseio.com",
      projectId: "red-social-e9c66",
      storageBucket: "red-social-e9c66.appspot.com",
      messagingSenderId: "646838297317",
      appId: "1:646838297317:web:ffee153a92a8e24b816a0c"
    };
    firebase.initializeApp(firebaseConfig);
    usuario=localStorage.getItem("usuario");
    room_name=localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML="Bienvenido a Swisser, "+usuario;

    function addRoom()
    {
    room_name=document.getElementById("sala").value;
    firebase.database().ref("/").child(room_name).update({
    purpose:"Añadiendo nombre de sala"
    });
    localStorage.setItem("room_name",room_name);
    window.location="SWISSER_page.html";
    }
    function getData()
    {
          firebase.database().ref("/" + room_name).on('value', function (snapshot) 
          { 
                document.getElementById("output").innerHTML = "";
                 snapshot.forEach(function (childSnapshot) 
                 { childKey = childSnapshot.key;
                       childData = childSnapshot.val();
                       if (childKey != "purpose") 
                       { 
                            firebase_message_id = childKey; 
                            message_data = childData;
                             //Inicia código 
          console.log(firebase_message_id);
           console.log(message_data); 
           name = message_data['name'];
            message = message_data['message'];
             like = message_data['like']; 
             name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
              message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
               like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>"; 
               span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>"; 
               row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
                 //Termina código
                 } }); });
    }
    getData();
    function logout()
    {
    window.location="index.html";
    localStorage.removeItem("usuario");
    }
    function redirect_to_room(name)
    {
          window.location="SWISSER_page.html";
          localStorage.setItem("room_name", name);
    }