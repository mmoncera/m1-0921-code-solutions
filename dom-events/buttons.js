function handleClick(event) {
  console.log('button clicked');
  console.log('value of event:', event);
  console.log('value of event.target', event.target);
}

var $clickButton = document.querySelectorAll('button.click-button');

console.log('value of $clickButton:', $clickButton);

$clickButton[0].addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('value of event:', event);
  console.log('value of event.target:', event.target);
}

var $hoverButton = document.querySelectorAll('button.hover-button');

console.log('value of $hoverButton:', $hoverButton);

$hoverButton[0].addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('value of event:', event);
  console.log('value of event.target', event.target);
}

var $doubleClickButton = document.querySelectorAll(
  'button.double-click-button'
);

console.log('value of $doubleClickButton:', $doubleClickButton);

$doubleClickButton[0].addEventListener('dblclick', handleDoubleClick);
