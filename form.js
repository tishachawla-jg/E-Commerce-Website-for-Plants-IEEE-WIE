var firebaseConfig = {
    apiKey: "AIzaSyDe5jCD6m7d_vw43MAOxiLK1UMAr9K2Z9o",
    authDomain: "planthub-d48b8.firebaseapp.com",
    projectId: "planthub-d48b8",
    storageBucket: "planthub-d48b8.appspot.com",
    messagingSenderId: "973539900232",
    appId: "1:973539900232:web:134543384d0e98b2eed17d",
    measurementId: "G-54FF2NQ2MD"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Signed Up Successfully");
}

function signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Sign In Successful");
}