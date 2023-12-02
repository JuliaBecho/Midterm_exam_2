window.addEventListener('load', function () {
    document.getElementsByClassName('btn bg-googleplay border w-100 mx-0 text-gray-700').addEventListener('click' , function () {
        

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
    
    document.getElementsByClassName('btn btn-primary').addEventListener('click', function(){ 

        alert('login');
        var emailTxt = document.getElementById('email').value;
        var passtxt = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(emailTxt, passtxt)
        .then((userCredential) => {
    
        var user = userCredential.user;
    
     })
     .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
     });

    });

     function getPhoneNumberFromUserInput() {
        return "+17782465707";
     }

     document.getElementById('btn bg-black border w-100 mx-0 text-white').addEventListener('click', function() {

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    const phoneNumber = getPhoneNumberFromUserInput();
     const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
    
      window.confirmationResult = confirmationResult;
     
      const code = '123456'
      
    confirmationResult.confirm(code).then((result) => {
  
     const user = result.user;
    }).catch((error) => {
    });
      // ...
    }).catch((error) => {
      alert(error);
    });
    });


});

