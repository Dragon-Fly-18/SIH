let progress = 0;
const progressBar = document.querySelector(".progress");
const loadingText = document.getElementById("loading-text");
const train = document.querySelector(".train");

let interval = setInterval(() => {
  if (progress >= 100) {
    clearInterval(interval);
    loadingText.textContent = "Train Data Loaded!";
    train.style.animation = "none"; // stops train
  } else {
    progress += 2;
    progressBar.style.width = progress + "%";
    loadingText.textContent = "Loading Train Data... " + progress + "%";
  }
}, 200);