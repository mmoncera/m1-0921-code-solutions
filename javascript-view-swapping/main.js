var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target && event.target.matches('.tab')) {
    $tab.forEach(node => {
      if (node === event.target) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });

    var $dataView = event.target.getAttribute('data-view');

    $view.forEach(node => {
      if (node.dataset.view === $dataView) {
        node.classList.remove('hidden');
      } else {
        node.classList.add('hidden');
      }
    });
  }
});
