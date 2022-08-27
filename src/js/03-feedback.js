import throttle from 'lodash.throttle';
const SAVE_KAY = 'feedback-form-state';
const findInputBox = document.querySelector('.feedback-form');
const findInput = document.querySelector('.feedback-form input');
const findText = document.querySelector('.feedback-form textarea');
const findSubmit = document.querySelector('.feedback-form');

findInputBox.addEventListener('input', throttle(writeInput, 500));
findSubmit.addEventListener('submit', writeSubmit);
findInput.addEventListener('input', throttle(writeInput, 500));
findText.addEventListener('input', throttle(writeInput, 500));

function writeInput() {
  const formData = {};
  formData[findInput.name] = findInput.value;
  formData[findText.name] = findText.value;
  localStorage.setItem(SAVE_KAY, JSON.stringify(formData));
}

function writeSubmit(evt) {
  evt.preventDefault();
  const outSub = localStorage.getItem(SAVE_KAY);
  const reSub = JSON.parse(outSub)
  console.log(reSub);
    evt.target.reset();
  localStorage.removeItem(SAVE_KAY);

}

populateTextarea();
function populateTextarea() {
  const savedMessage = localStorage.getItem(SAVE_KAY);
  const outMessage = JSON.parse(savedMessage);
  console.log(outMessage);

  if (outMessage) {
    findInput.value = outMessage.email;
  }
   if (outMessage) {
    findText.value = outMessage.message;
  }
}


// const formData = {};
// function noDel() {
//   formData[findInput.name] = findInput.value;
//   formData[findText.name] = findText.value;
//   // localStorage.setItem(SAVE_KAY, formData);
//   }