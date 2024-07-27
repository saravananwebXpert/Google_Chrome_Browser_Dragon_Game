var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
  character.classList.add("animate");
  setTimeout(() => {
    character.classList.remove("animate");
  }, 3000);
}
var checkDead = setInterval(() => {
  var characterPosition = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockPosition = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (characterPosition >= 130 && blockPosition <= 20) {
    block.style.animation = "none";
    block.style.display = "none";

    document.getElementById("start").style.display = "none";
    document.getElementById("stop").style.display = "none";

    document.getElementById("gameOver").style.display = "block";
  }
}, 10);

function playAgain() {
  location.reload();
}
function stopGame() {
  block.style.animation = "none";
}

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("start").style.display = "block";
  document.getElementById("stop").style.display = "block";

  document.getElementById("gameOver").style.display = "none";
});
