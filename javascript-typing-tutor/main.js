var $characters = document.querySelectorAll('span');
var $playAgainContainer = document.querySelector('.play-again-container');
var $accuracyText = document.querySelector('.accuracy');
var $playAgainButton = document.querySelector('.play-again-button');
var counter = 0;
var correctEntries = 0;
var incorrectEntries = 0;

function typeTestHandler(event) {
  var char = $characters[counter].textContent;
  if (event.keyCode === 8) {
    if (counter !== 0) {
      $characters[counter].className = '';
      counter--;
      incorrectEntries++;
      $characters[counter].className = 'current-character';
    }
  } else if (event.key === char.charAt(0)) {
    $characters[counter].className = 'correct';
    counter++;
    correctEntries++;
    if (counter === 30) {
      $accuracyText.textContent = accuracy(correctEntries, incorrectEntries) + '%';
      $playAgainContainer.className = 'play-again-container active-container';
      return;
    }
    $characters[counter].className = 'current-character';
  } else if (event.key !== char.charAt(0)) {
    $characters[counter].className = 'current-character incorrect';
    incorrectEntries++;
  }
}

function accuracy(correct, incorrect) {
  var grosscorrect = correct - incorrect;
  var accuracyNum = (grosscorrect / 30) * 100;
  return accuracyNum;
}

function resetTest(event) {
  counter = 0;
  correctEntries = 0;
  incorrectEntries = 0;
  for (var i = 0; i < $characters.length; i++) {
    $characters[i].className = '';
  }
  $playAgainContainer.className = 'play-again-container';
  $characters[0].className = 'current-character';
}

window.addEventListener('keydown', typeTestHandler);
$playAgainButton.addEventListener('click', resetTest);
