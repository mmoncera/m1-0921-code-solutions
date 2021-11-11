var $buttonOpen = document.querySelector('.button-open');
var $modal = document.querySelector('.modal');
var $buttonClose = document.querySelector('.button-close');

$buttonOpen.addEventListener('click', function (event) {
  $modal.style.display = 'block';
});

$buttonClose.addEventListener('click', function (event) {
  $modal.style.display = 'none';
});
