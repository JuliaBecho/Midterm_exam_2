window.addEventListener('load', function () {
    document.getElementById('sign-in-google').addEventListener('click' , function () {
        

        var provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('email');
        firebase.auth()
        .signInWithPopup(provider)
        .then(function(result) {
            console.log('Logging sucessfully', result.user);
        })
        .catch(function(error) {
            console.log('Logging fail', error);
        });

    });
    
    document.getElementById('sign-in-traditional').addEventListener('click', function(){ 

        alert('login');
        var emailTxt = document.getElementById('email').value;
        var passtxt = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(emailTxt, passtxt)
        .then((userCredential) => {
    // Signed in
        var user = userCredential.user;
    // ...
     })
     .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
     });

    });
});