var count = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  count++;

  $clickCount.textContent = `Clicks: ${count}`;

  $hotButton.classList.toggle('cold', count < 4);
  $hotButton.classList.toggle('cool', count >= 4 && count < 7);
  $hotButton.classList.toggle('tepid', count >= 7 && count < 10);
  $hotButton.classList.toggle('warm', count >= 10 && count < 13);
  $hotButton.classList.toggle('hot', count >= 13 && count < 16);
  $hotButton.classList.toggle('nuclear', count >= 16);
});
