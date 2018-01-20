  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBGxDJULQHZX5KqY9vl7V4ZJkcbm3-6xjM",
    authDomain: "spartahacks2018.firebaseapp.com",
    databaseURL: "https://spartahacks2018.firebaseio.com",
    projectId: "spartahacks2018",
    storageBucket: "spartahacks2018.appspot.com",
    messagingSenderId: "1097294590667"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  function writeImagedata(imageID) {
    var url_thing = document.getElementById("imgururl").value;
    var title_thing = document.getElementById("phototitle").value;
    var image_id    = database.ref('images/');
    console.log(image_id);
    console.log(url_thing);
    console.log(title_thing);
    firebase.database().ref('images/' + image_id).set({

      username: "ok",
      width: "1",
      height: "2",
      url: url_thing,
      title: title_thing
    });
  }
