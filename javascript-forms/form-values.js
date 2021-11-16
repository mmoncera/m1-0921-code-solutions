var $forms = document.querySelector('#contact-form');

$forms.addEventListener('submit', function (event) {
  event.preventDefault();

  console.log('messageData:', {
    name: $forms[0].value,
    email: $forms[1].value,
    message: $forms[2].value
  });

  $forms.reset();
});
