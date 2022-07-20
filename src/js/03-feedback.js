import throttle from 'lodash.throttle';

const refs = {
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
    form: document.querySelector('.feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';


const onFormData = () => {
    const email = refs.email.value;
    const message = refs.message.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }))
};


const dataFromLocalStorage = () => {
    const getData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(getData);
    if (parsedData) {
        refs.email.value = parsedData.email
        refs.message.value = parsedData.message
    };
}


const onSubmitForm = e => {
    e.preventDefault();
    const formElements = e.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;
    if (email === '' || message === '') {
        return alert('Please fill in all the fields!');
    }
    console.log(localStorage.getItem(STORAGE_KEY));
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};


dataFromLocalStorage();
refs.form.addEventListener('input', throttle(onFormData, 500));
refs.form.addEventListener('submit', onSubmitForm);

