// start sigIn page

let userName = document.querySelector('.userName');
let userEmail = document.querySelector('.userEmail');
let userPass = document.querySelector('.userPass');
let SignUpButton = document.querySelector('.Sign-Up');
let SignInButton = document.querySelector('.SigninButton');
let AlreadyExist = document.querySelector('.AlreadyExist')
if (SignInButton != null) {
    SignInButton.addEventListener('click', function () {
        location.assign('./index.html');
    })
}
var myAllUsers = [];

console.log(JSON.parse(localStorage.getItem('myAllUsers')));
function addUser() {
    if (localStorage.getItem(myAllUsers) != null) {
        myAllUsers = JSON.parse(localStorage.getItem('myAllUsers'));
    }
    let userInfo = {
        name: userName.value,
        email: userEmail.value,
        pass: userPass.value,
    };
    myAllUsers.push(userInfo);
    localStorage.setItem('myAllUsers', JSON.stringify(myAllUsers));
}

if (SignUpButton != null) {
    SignUpButton.addEventListener('click', function () {

        if (userName.value == "" || userEmail.value == "" || userPass.value == "") {
            AlreadyExist.classList.replace('text-danger', 'text-danger')
            AlreadyExist.innerHTML = 'All Inputs Required';
        }
        else {
            for (let i = 0; i < myAllUsers.length; i++) {
                if (myAllUsers[i].email == userEmail.value) {
                    AlreadyExist.classList.replace('text-danger', 'text-danger')
                    AlreadyExist.innerHTML = 'Already Exist';
                }

            }
            addUser();
            AlreadyExist.classList.replace('text-danger', 'text-success')
            AlreadyExist.innerHTML = 'Success';
            location.assign('./index.html')
        }
    })
}

// End sigIn page ===========================

// start index page ==================================
let signUpPage = document.querySelector('#forSignup');
let inputEmail = document.querySelector('#floatingEmail');
let inputPassword = document.querySelector('#floatingPassword');
let incorrectEmailOrPassword = document.querySelector('.incorrectEmailOrPassword');
let AllInputsRequired = document.querySelector('.AllInputsRequired');
let loginButton = document.querySelector('.login')
if (signUpPage != null) {
    signUpPage.addEventListener('click', function () {
        location.assign('./signin.html');
    })
};
if (loginButton != null) {
    let isTrue = true
    loginButton.addEventListener('click', function () {
        myAllUsers = JSON.parse(localStorage.getItem('myAllUsers'))
        // console.log(myAllUsers)
        if (inputEmail.value == "" || inputPassword.value == "") {
            AllInputsRequired.classList.remove('d-none');
        }
        else {
            for (let i = 0; i < myAllUsers.length; i++) {   
                // myAllUsers = JSON.parse(localStorage.getItem('myAllUsers'))
                if (myAllUsers[i].email == inputEmail.value && myAllUsers[i].pass == inputPassword.value) {
                    location.href = './home.html'
                    console.log(true);
                    localStorage.setItem('usernmae', JSON.stringify(myAllUsers[i].name))
                }
                else {
                    incorrectEmailOrPassword.classList.remove('d-none');
                    AllInputsRequired.classList.add('d-none');
                }
            }
            // console.log('error');
            // console.log(JSON.parse(localStorage.getItem('myAllUsers')));

        }
        // if (isTrue == false) {
        //     location.href = './home.html'
        // }
    })
};




// End index page

// start home page

let myH2 = document.querySelector('.myH2');
let Logout = document.querySelector('.Logout');

if (Logout != null) {
    Logout.addEventListener('click', function () {
        location.assign('./index.html')
    });

}
if (myH2 != null) {
    myH2.innerHTML = `Welcome ${JSON.parse(localStorage.getItem('usernmae'))}`
}

// End home page


