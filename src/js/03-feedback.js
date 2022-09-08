import localstorageService from './localstorage.js';
import throttle from 'lodash.throttle';

const formAll = document.querySelector('.feedback-form');
const userValue = {};

const formEl = () => {
  const fromValueDate = localstorageService.load('userValue');

  if (!fromValueDate) { return }

    for (const element in fromValueDate) {
      if (fromValueDate.hasOwnProperty(element)) {
// console.log(element)
        
        formAll.elements[element].value = fromValueDate[element];

        userValue[element] = fromValueDate[element];
      }
    }
};


const onFormImputValue = event => {

    const { target } = event;
    const fieldName = target.name;
    const fieldValue = target.value;
    userValue[fieldName] = fieldValue;
// console.log(fieldValue)
    localstorageService.save('userValue', userValue);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    localstorageService.remove('userValue');
    formAll.reset();
  };

formEl();
formAll.addEventListener('input', throttle(onFormImputValue, 500));
formAll.addEventListener('submit', onFormSubmit);