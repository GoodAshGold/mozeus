var rulesHeader = document.querySelector('#rulesHeader');
var rulesBlock = document.querySelector('#rules');

function showRules() {
  if (rulesHeader.style.display === 'none') {
    rulesHeader.style.display = 'flex';
    rulesBlock.style.display = 'flex';
  } else {
    rulesHeader.style.display = 'none';
    rulesBlock.style.display = 'none';
  }
}
