var $characters = document.querySelectorAll('.characters');
var $modal = document.querySelector('.modal');
var $stats = document.querySelector('.stats');
var $playAgain = document.querySelector('.play-again');
var index = 0;
var keyStrokes = 0;

document.addEventListener('keydown', function (event) {
  var lastIndex = $characters.length - 1;

  if (index === lastIndex && $characters[lastIndex].textContent === event.key) {
    var percentage = `${Math.round((index / keyStrokes) * 100)}%`;

    $stats.textContent = `Stats: ${percentage}`;
    $modal.style.display = 'block';
  }

  if (event.key === $characters[index].textContent) {
    $characters[index].style.color = 'green';
    $characters[index].style.borderBottom = 'none';
    index++;
    $characters[index].style.borderBottom = '0.25rem solid black';
  } else {
    $characters[index].style.color = 'red';
  }

  keyStrokes++;
});

$playAgain.addEventListener('click', function (event) {
  keyStrokes = 0;
  index = 0;
  $modal.style.display = 'none';
  $characters.forEach(val => {
    val.style.color = 'black';
    val.style.borderBottom = 'none';
  });
  $characters[0].style.borderBottom = '0.25rem solid black';
});
