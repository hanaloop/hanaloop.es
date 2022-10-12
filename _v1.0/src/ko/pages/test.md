

<script src="https://www.gstatic.com/firebasejs/8.0/firebase.js"></script>
<script>
  var config = {
    apiKey: "AIzaSyAmhPctQh5g3xOTBXU-qibo1YPR8DxPsE0",
    authDomain: "ecoloop-dev-359801.firebaseapp.com",
  };
  firebase.initializeApp(config);
</script>

<div>Identity Platform Quickstart</div>
<div id="message">Loading...</div>


<script>
  var email = "kineart@gmail.com";
  var password = "Testtest1";

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("message").innerHTML = "Welcome, " + user.email;
   } else {
      document.getElementById("message").innerHTML = "No user signed in.";
    }
  });

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    document.getElementById("message").innerHTML = error.message;
  });
</script>
