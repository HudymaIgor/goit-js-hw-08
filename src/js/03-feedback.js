import localstorageService from './localstorage.js';

import throttle from 'lodash.throttle';

const formAll = document.querySelector('.feedback-form');

const userValue = {};

const formEl = () => {
    const fromValueDate = localstorageService.load('userValue');

    for (const elements in fromValueDate) {
      if (fromValueDate.hasOwnProperty(elements)) {
          formAll.elements[elements].value = fromValueDate[elements];
          userValue[elements] = fromValueDate[elements];
      }
    }
  };

const onFormImputValue = event => {
    const { target } = event;
    const fieldName = target.name;
    const fieldValue = target.value;
    userValue[fieldName] = fieldValue;

    localstorageService.save('userValue', userValue);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    localstorageService.remove('userValue');
    formAll.reset();
  };

formAll.addEventListener('input', throttle(onFormImputValue, 500));
formAll.addEventListener('submit', onFormSubmit);