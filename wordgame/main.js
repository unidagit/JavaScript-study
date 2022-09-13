const joinNumber = Number(prompt("몇명이 참가하시나요?"));
const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");
let word; //제시어
let newWord; //현재단어

function onInput(e) {
  newWord = e.target.value;
}

function onClickButton() {
  if (!word || word[word.length - 1] === newWord[0]) {
    //제시어가 비어있거나 입력한 단어가 올바른가?
    word = newWord;
    $word.textContent = word;
    const order = Number($order.textContent);
    if (order + 1 > joinNumber) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
    $input.value = "";
    $input.focus();
  } else {
    alert("올바르지 않은 단어입니다");
  }
  $input.value = "";
  $input.focus();
}

$input.addEventListener("input", onInput);
$button.addEventListener("click", onClickButton);
