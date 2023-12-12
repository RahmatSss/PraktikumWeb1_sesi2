const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signincontainer = document.querySelector('.signincontainer');

signUpBtnLink.addEventListener('click', () => {
    signincontainer.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    signincontainer.classList.toggle('active');
});
