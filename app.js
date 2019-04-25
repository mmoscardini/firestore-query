const firebase = require('firebase/app');
require('firebase/auth');
const { firebaseConfig } = require('./config');

const initfirebase = async () =>{
  try{
    firebase.initializeApp(firebaseConfig);
    
    firebase.auth().signInWithEmailAndPassword("matheus.moscardini@quintoandar.com.br", 'credentials.password').catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorMessage === "There is no user record corresponding to this identifier. The user may have been deleted."){
        console.log('EMAIL_NOT_FOUND: There is no user record corresponding to this identifier. The user may have been deleted.');
      }
      else if(errorMessage === "The password is invalid or the user does not have a password."){
        console.log("INVALID_PASSWORD: The password is invalid or the user does not have a password.");
      }
      else if(errorMessage === "The user account has been disabled by an administrator."){
        console.log("USER_DISABLED: The user account has been disabled by an administrator.")
      }
      return;
    })
  } catch (err) {
    // Handle Errors here.
    
  };
} 

const main = async () =>{
  initfirebase();
}
main()