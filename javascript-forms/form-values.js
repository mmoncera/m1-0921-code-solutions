var $forms = document.querySelector('#contact-form');

$forms.addEventListener('submit', function (event) {
  event.preventDefault();

  var values = {
    name: $forms[0].value,
    email: $forms[1].value,
    message: $forms[2].value
  };

  console.log('messageData:', values);

  $forms.reset();
});
