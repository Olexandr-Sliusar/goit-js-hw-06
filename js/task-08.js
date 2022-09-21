const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onloginFormSubmit);

function onloginFormSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  let formDataObj = {};
  for (const element of elements) {
    if (element.nodeName === 'BUTTON') {
      continue;
    }
    if (element.value === '') {
      alert('Все поля должны быть заполнены');
      return;
    }
    formDataObj[element.name] = element.value;
  }
  console.log(formDataObj);

  loginForm.reset();
}

/* *************Второй вариант решения*************** */
// function onloginFormSubmit(event) {
//   event.preventDefault();
//   const { email, password } = event.currentTarget.elements;
//   if (email.value === '' || password.value === '') {
//     alert('Все поля должны быть заполнены');
//     return;
//   }
//   console.log({ email: email.value, password: password.value });

//   loginForm.reset();
// }
