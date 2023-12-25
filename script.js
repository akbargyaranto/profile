function dragStart(event) {
  event.dataTransfer.setData("text/plain", "dragging");
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  if (data === "dragging") {
    console.log("Drop event triggered!");
    // Implementasikan logika sesuai kebutuhan (misalnya: membuka panel kontrol audio)
  }
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  if (data === "dragging") {
    console.log("Drop event triggered!");

    // Membuat elemen audio player
    const audioPlayer = document.getElementById("audio-player");

    // Mengatur posisi elemen audio player sesuai dengan posisi drop
    audioPlayer.style.position = "fixed";
    audioPlayer.style.left = `${event.clientX}px`;
    audioPlayer.style.top = `${event.clientY}px`;
  }
}

// Fungsi allowDrop tetap sama
function allowDrop(event) {
  event.preventDefault();
}

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio");
  const playIcon = document.querySelector(".play-icon");
  const pauseIcon = document.querySelector(".pause-icon");
  const audioControls = document.getElementById("audio-controls");

  // Toggling play and pause icons
  audioControls.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playIcon.style.display = "none";
      pauseIcon.style.display = "inline-block";
    } else {
      audio.pause();
      playIcon.style.display = "inline-block";
      pauseIcon.style.display = "none";
    }
  });

  // Update icons based on audio state
  audio.addEventListener("play", function () {
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline-block";
  });

  audio.addEventListener("pause", function () {
    playIcon.style.display = "inline-block";
    pauseIcon.style.display = "none";
  });
});
