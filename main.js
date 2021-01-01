
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOCF6z15Jyc-9m8YkFCqNuwD1otWcHfY0",
    authDomain: "contactform-5cf06.firebaseapp.com",
    databaseURL: "https://contactform-5cf06-default-rtdb.firebaseio.com",
    projectId: "contactform-5cf06",
    storageBucket: "contactform-5cf06.appspot.com",
    messagingSenderId: "860130612514",
    appId: "1:860130612514:web:177a0698617dd9aeb1417b",
    measurementId: "G-MMXCDBE08H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  
  
  















// Reference messages collection
var messagesRef = firebase.database().ref('messages');
  
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}