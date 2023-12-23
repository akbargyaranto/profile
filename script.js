
    document.addEventListener('DOMContentLoaded', function () {
      const audio = document.getElementById('audio');
      const playIcon = document.querySelector('.play-icon');
      const pauseIcon = document.querySelector('.pause-icon');

      // Toggling play and pause icons
      document.getElementById('audio-controls').addEventListener('click', function () {
        if (audio.paused) {
          audio.play();
          playIcon.style.display = 'none';
          pauseIcon.style.display = 'inline-block';
        } else {
          audio.pause();
          playIcon.style.display = 'inline-block';
          pauseIcon.style.display = 'none';
        }
      });

      // Update icons based on audio state
      audio.addEventListener('play', function () {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline-block';
      });

      audio.addEventListener('pause', function () {
        playIcon.style.display = 'inline-block';
        pauseIcon.style.display = 'none';
      });
    });
 