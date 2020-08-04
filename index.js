const API_URL = "https://api.jikan.moe/v3/anime/";

const randomAnimeCard = document.getElementById("anime-card");
const button = document.getElementById("btn");

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const getRandomAnime = () => {
  randomAnimeCard.innerHTML = "";

  fetch(`${API_URL}${randomNumber(1, 5114)}`)
    .then((res) => res.json())
    .then((data) => {
      randomAnimeCard.innerHTML = `<img src="${data.image_url}">
            <p>You got ${data.title}!</p>`;
    });
};

button.addEventListener("click", getRandomAnime);
