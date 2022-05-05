const dino = document.getElementById("dino"),
  cactus = document.getElementById("cactus"),
  equalizer = document.querySelector(".equalizer"),
  audio = document.querySelector(".audio");

/* sound block
убрал ненужный код и обернул код в функцию */
const sound = () => {
  equalizer.classList.toggle("paused");
  equalizer.classList.contains("paused") ? audio.pause() : audio.play();
};

equalizer.addEventListener("click", () => {
  sound();
});

const parsePosition = (element, cssProperty) => {
  //функция нужна чтобы не повторять одну и туже строку в коде много раз
  return parseFloat(
    window.getComputedStyle(element).getPropertyValue(cssProperty)
  );
};

//game block
function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 700);
}

document.addEventListener("keydown", function () {
  jump();
});

setInterval(function () {
  let dinoTop = parsePosition(dino, "top");
  let cactusLeft = parsePosition(cactus, "left");

  console.log(dinoTop, cactusLeft);

  if (
    parsePosition(cactus, "left") <  40 &&
    parsePosition(cactus, "left") > 0 &&
    parsePosition(dino, "top") >= 130 //здесь уменьшил top чтобы чик чирик падая сверху на картошку тоже проигрывал
  ) {
    audio.pause();
    alert("GAME OVER!");
  }
}, 10);