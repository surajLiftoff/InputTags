const form = document.querySelector('form');
const radioButtons = document.querySelectorAll('input[name="name"]');
const username = document.getElementById("username");
let framework = document.getElementById("framework");
let checkboxes = document.querySelectorAll('input[type=checkbox]');
let output = document.getElementById("output");
const radio = document.getElementById('radio');
const check = document.getElementById('checkbox');
const backdrop = document.getElementById('backdrop');
const btn = document.getElementById('btn');


form.addEventListener("submit", e => {
    e.preventDefault();

    if (username.value === '') {
        setErrorFor(username, 'Please fill your name!');
    } else if (username.value.length < 4 || username.value.length > 15) {
        setErrorFor(username, 'Name charcter should be in range of 5 to 15!');
    } else {
        output.innerHTML += `Welcome ${username.value}! `;
    }

    if (framework.value === '') {
        setErrorFor(framework, 'Please select any framework!');
    } else {
        output.innerHTML += "Let's start " + framework.value;
    }

    let platform = "";
    checkboxes.forEach(box => {
        if (box.checked) {
            platform += box.value + ", ";
        }
    });

    // if (!platform === '') {
    //     output.innerHTML += " on " + platform;
    // } else {
    //     setErrorFor(check, 'Please select any option!');
    // }

    output.innerHTML += " on " + platform;

    // radio button

    let selectedAnswer;

    for (const radioButton of radioButtons) {

        if (radioButton.checked) {
            selectedAnswer = radioButton.value;
            console.log(selectedAnswer);
            break;
        }
    }

    output.innerHTML += `${selectedAnswer} dive in.`;

    // if (selectedAnswer === '') {
    //     setErrorFor(radio, 'Please select any online platform!');
    // } else {
    //     output.innerHTML += `${selectedAnswer} dive in.`
    // }

    // output.innerHTML = selectedAnswer ? `You selected ${selectedAnswer}` : `You haven't selected any answer`;
    showOutputPage();
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerHTML = message;
}


const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const showOutputPage = () => {
    output.classList.add('visible');
    toggleBackdrop();
};



const closeOutput = () => {
    output.classList.remove('visible');
    toggleBackdrop();
};

const backdropClickHandler = () => {
    closeOutput();
}

backdrop.addEventListener('click', backdropClickHandler);