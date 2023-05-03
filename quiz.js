var currentIndex = 0; // 현재 퀴즈 문제의 인덱스를 저장하는 변수
var correctCount = 0; // 맞춘 문제의 수를 저장하는 변수

function displayWord() {
  // 퀴즈 문제를 화면에 표시하는 함수
  var wordElement = document.getElementById("word"); // 문제 표시할 요소를 가져옴
  wordElement.textContent = words[currentIndex].word; // 현재 문제의 단어를 요소에 표시
}

function checkAnswer() {
  // 사용자가 입력한 답을 체크하는 함수
  var answer = document.getElementById("answer").value.trim().toLowerCase(); // 입력한 답을 가져옴
  var resultElement = document.getElementById("result"); // 결과를 표시할 요소를 가져옴

  if (answer == "") {
    // 입력값이 없는 경우
    resultElement.textContent = "단어를 입력하세요."; // 결과 요소에 메시지를 표시
    resultElement.style.color = "red"; // 메시지 색상을 빨간색으로 변경
    return;
  } else if (answer == words[currentIndex].meaning.toLowerCase()) {
    // 입력값이 정답인 경우
    resultElement.textContent = "정답입니다!"; // 결과 요소에 메시지를 표시
    resultElement.style.color = "green"; // 메시지 색상을 초록색으로 변경
    correctCount++; // 맞춘 문제 수를 증가시킴
  } else {
    // 입력값이 오답인 경우
    resultElement.textContent =
      "틀렸습니다. '" +
      words[currentIndex].word +
      "'의 뜻은 '" +
      words[currentIndex].meaning +
      "' 입니다."; // 결과 요소에 메시지를 표시
    resultElement.style.color = "red"; // 메시지 색상을 빨간색으로 변경
  }
  document.getElementById("answer").value = ""; // 입력 필드를 초기화함
  currentIndex++; // 다음 문제로 인덱스를 증가시킴
  if (currentIndex == words.length) {
    // 마지막 문제인 경우
    var score = Math.round((correctCount / words.length) * 100); // 점수를 계산함
    alert("퀴즈가 끝났습니다. 당신의 점수는 " + score + "점입니다."); // 알림 메시지를 표시함
    window.location.href = "index.html"; // 메인 페이지로 이동함
  } else {
    // 마지막 문제가 아닌 경우
    displayWord(); // 다음 문제를 표시함
  }
}

displayWord(); // 페이지가 로드될 때 첫 번째 문제를 표시함
