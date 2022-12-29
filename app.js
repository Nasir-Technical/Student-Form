//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
//  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-Database.js";
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//    apiKey: "AIzaSyB7XZR78V3M9dBtpXec3Jp0nmrHweMAUJM",
//    authDomain: "student-form-624c0.firebaseapp.com",
//    projectId: "student-form-624c0",
//    storageBucket: "student-form-624c0.appspot.com",
//    messagingSenderId: "351901691615",
//    appId: "1:351901691615:web:bd43be3d15976b73b0436a",
//    measurementId: "G-G22J48SC56"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);

//  const database = getDatabase();

//  var firstname = document.getElementById("firstname");
//  var lastname = document.getElementById("lastname");
//  var email = document.getElementById("email");
//  var password = document.getElementById("password");
//  var cnic = document.getElementById("cnic");
//  var contact = document.getElementById("contact");
//  var cource = document.getElementById("cource");

//  var obj = {
//     firstname: firstname.value,
//     lastname: lastname.value,
//     email: email.value,
//     password: password.value,
//     cnic: cnic.value,
//     contact: contact.value,
//     cource: cource,
//  };

//  window.submited=function(){
//     console.log(obj);
//  };
//  submit();


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getDatabase ,ref,set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
 
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC4aDjxrtX6DQ4wtOLwZGa3Rbtx4KI48m4",
    authDomain: "weblive-ba409.firebaseapp.com",
    projectId: "weblive-ba409",
    storageBucket: "weblive-ba409.appspot.com",
    messagingSenderId: "41752623950",
    appId: "1:41752623950:web:2300cdce814c76142a3c1f",
    measurementId: "G-VBPNFNQ89E"
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 
 
 
 
  const database = getDatabase();
  
  var firstname = document.getElementById("firstname");
  var lastname = document.getElementById("lastname");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var cnic = document.getElementById("cnic");
  var contact = document.getElementById("contact");
 var cource = document.getElementById("cource");

  
 
  window.submited = function (){
     var obj = {
         firstname: firstname.value,
         lastname: lastname.value,
         email: email.value,
         password: password.value,
         cnic: cnic.value,
         contact: contact.value,
         cource: cource,
     };
     console.log(obj);
     obj.id = Math.random().toString().slice(2)
     const taskRef = ref(database, `task/${obj.id}/`);
     set(taskRef,obj);
  };
     submited();
  