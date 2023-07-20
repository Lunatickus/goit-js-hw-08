import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea: document.querySelector('textarea')
}

const STORAGE_KEY = "feedback-form-state";

const formData = {};

refs.form.addEventListener("input", throttle(onFormInput, 500));
refs.form.addEventListener("submit", onFormSubmit);

populateForm();

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if(savedData) {
        if(savedData.email) {
            refs.email.value = savedData.email;
        }

        if(savedData.message) {
            refs.textarea.value = savedData.message;
        }
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log({email: evt.currentTarget.elements.email.value, message: evt.currentTarget.elements.message.value});
    localStorage.removeItem(STORAGE_KEY);

    evt.currentTarget.reset();
}