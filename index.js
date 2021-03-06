const API_URL = "https://api.jikan.moe/v3/anime/";

const randomAnimeCard = document.getElementById("anime-card-section");
const button = document.getElementById("btn");

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const getRandomAnime = () => {
  randomAnimeCard.innerHTML = "";

  fetch(`${API_URL}${randomNumber(1, 5114)}`)
    .then((res) => res.json())
    .then((data) => {
      randomAnimeCard.innerHTML = `<div class="anime-card" id="anime-card"><img class="anime-image" src="${data.image_url}">
            <p class="anime-title">You got ${data.title}!</p></div>`;
    });
};

button.addEventListener("click", getRandomAnime);
