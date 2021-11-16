function handleFocus(event) {
  console.log('focus');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('event.target.value:', event.target.value);
}

var $forms = document.querySelector('#contact-form');

for (let i = 0; i < $forms.length; i++) {
  $forms[i].addEventListener('focus', handleFocus);
  $forms[i].addEventListener('blur', handleBlur);
  $forms[i].addEventListener('input', handleInput);
}
