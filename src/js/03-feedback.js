import throttle from 'lodash.throttle';

const INPUT_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');

const {
  elements: { email, message },
} = formRef;

formRef.addEventListener('input', throttle(inputHandler, 500));

function inputHandler(evt) {
  const dataObj = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(INPUT_KEY, JSON.stringify(dataObj));
}

let feedbackFormState = JSON.parse(
  localStorage.getItem('feedback-form-state')
) || { email: '', message: '' };

email.value = feedbackFormState.email;
message.value = feedbackFormState.message;

formRef.addEventListener('submit', evt => {
  evt.preventDefault();

  localStorage.removeItem(INPUT_KEY);

  evt.currentTarget.reset();
});
