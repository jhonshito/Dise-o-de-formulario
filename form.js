
// const inputOne = document.querySelector('.inputOne')
const inputOne = document.getElementById('inputOne')
const inputTwo = document.querySelector('.inputTwo');
const inputThree = document.querySelector('.inputThree');
const inputFour = document.querySelector('.inputFour');
const boton = document.querySelector('.boton');


boton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(inputOne.value)
    
    if(inputOne.value == ''){
        console.log('siiii7u')
    }
    // if(inputOne.trim() === ''){
    //     console.log('siiiii')
    // }
});
