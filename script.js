const character = document.getElementById("character");
const block = document.getElementById("block");

function jump() {
  if (!character.classList.contains("animate")) {
    character.classList.add("animate");
    setTimeout(() => {
      character.classList.remove("animate");
    }, 2000);
  }
}
const checkDead = setInterval(() => {
  const characterPosition = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  const blockPosition = parseInt(
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
  block.style.display = "block";
}

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("start").style.display = "block";
  document.getElementById("stop").style.display = "block";
  document.getElementById("gameOver").style.display = "none";
});
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    jump();
  }
});
