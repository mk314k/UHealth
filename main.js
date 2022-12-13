const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

if (signUpButton){
    signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));
}
if (signInButton){
    signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));
}



console.log("Console works!");