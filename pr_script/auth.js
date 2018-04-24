function toggleSignIn(){
  var userEmail = document.getElementById('userEmailLog');
  var userPass = document.getElementById('userPassLog');
  if( firebase.auth().currentUser){
    firebase.auth().signOut();
  }
  else{
  var email = userEmail.value;
  var password = userPass.value;
}
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // [START_EXCLUDE]
       if (errorCode === 'auth/wrong-password') {
         alert('Wrong password.');
       } else {
         alert(errorMessage);
       }
       console.log(error);
       // [END_EXCLUDE]
     });
     // [END authwithemail]
   };

function toggleSignUp(){
  var email2 = document.getElementById('userEmail').value;
  var pass2 = document.getElementById('userPass').value;
  firebase.auth().createUserWithEmailAndPassword(email2, pass2).catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // [START_EXCLUDE]
       if (errorCode == 'auth/weak-password') {
         alert('The password is too weak.');
       } else {
         alert(errorMessage);
       }
       console.log(error);
       // [END_EXCLUDE]
     });
     firebase.auth().signOut();
     document.getElementById('signPage').style.display = "none";
     document.getElementById('loginPage').style.display = "block";
     // [END createwithemail]
};


firebase.auth().onAuthStateChanged(function(user) {

        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // [START_EXCLUDE]
          console.log("Welcome "+email);
          alert("Welcome "+email);
              window.location.assign("../pr_html/index2.html");
          // document.getElementById('logOut').style.display = "block" ;
          // document.getElementById('loginLoad').action = "../pr_html/index.html";
              firebase.auth().signOut();
          // [END_EXCLUDE]
        } else {
          // User is signed out.
          // [END_EXCLUDE]
          console.log("logged Out!");
          // document.getElementById('logOut').style.display = "none"
        }
        // [START_EXCLUDE silent]
});
