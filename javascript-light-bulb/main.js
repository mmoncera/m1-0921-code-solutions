var $switch = document.querySelector('.switch');
var $body = document.querySelector('body');

$switch.addEventListener('click', function (event) {
  $body.classList.toggle('body-off');
  $switch.classList.toggle('light-bulb-off');
});
