  // 11 de abril a las 18:00 (hora Uruguay UTC-3)
  const targetDate = new Date("2026-04-11T18:00:00-03:00").getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "¡Llegó el gran día! 💍";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, "0");
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
  }, 1000);

  /* Musica */

    const music = document.getElementById("background-music");
    const button = document.getElementById("music-toggle");

    let isPlaying = false;

    button.addEventListener("click", () => {
        if (isPlaying) {
        music.pause();
        button.innerHTML = "▶️ Música";
        } else {
        music.play();
        button.innerHTML = "⏸️ Pausar";
        }
        isPlaying = !isPlaying;
    });