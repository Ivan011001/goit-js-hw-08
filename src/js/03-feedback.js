import throttle from 'lodash.throttle';

const INPUT_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');

const {
  elements: { email, message },
} = formRef;

const dataObj = {};

formRef.addEventListener('input', throttle(inputHandler, 500));

function inputHandler(evt) {
  dataObj.email = email.value;
  dataObj.message = message.value;

  localStorage.setItem(INPUT_KEY, JSON.stringify(dataObj));
}

let feedbackFormState = JSON.parse(
  localStorage.getItem('feedback-form-state')
) || { email: '', message: '' };

email.value = feedbackFormState.email;
message.value = feedbackFormState.message;

formRef.addEventListener('submit', submitHandler);

function submitHandler(evt) {
  evt.preventDefault();

  if (!email.value || !message.value) {
    return alert('Fiil all the gaps in!');
  }

  console.log(dataObj);

  localStorage.removeItem(INPUT_KEY);

  evt.currentTarget.reset();
}
