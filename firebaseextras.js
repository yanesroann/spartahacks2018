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

  function writeImagedata(imageUrl, userId, name, width, height, comments) {
    firebase.database().ref('images/' + imageUrl).set({
      username: name,
      width: width,
      height: height,
      url: document.getElementById("imgururl"),
      title: document.getElementById("phototitle")
    });
  }
