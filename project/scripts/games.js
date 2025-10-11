const games = [
  { title: "Ghost of Tsushima", genre: "action", year: 2020, rating: 4.8, img: "images/ghost-resized.jpg" },
  { title: "Horizon Forbidden West", genre: "adventure", year: 2022, rating: 4.7, img: "images/horizon-resized.jpg" },
  { title: "Persona 5 Royal", genre: "rpg", year: 2019, rating: 4.9, img: "images/persona-resized.jpg" },
  { title: "Gran Turismo 7", genre: "sports", year: 2022, rating: 4.4, img: "images/gran-turismo-resized.jpg" },
  { title: "Returnal", genre: "action", year: 2021, rating: 4.2, img: "images/returnal-resized.jpg" },
];

const grid = document.getElementById("gamesGrid");
const genreFilter = document.getElementById("genreFilter");
const sortBy = document.getElementById("sortBy");


function renderGames(list) {
  grid.innerHTML = list.map(game => `
    <article class="card">
      <img src="${game.img}" alt="${game.title}" loading="lazy" width="600" height="400">
      <h2>${game.title}</h2>
      <p><strong>Genre:</strong> ${game.genre}</p>
      <p><strong>Year:</strong> ${game.year}</p>
      <p><strong>Rating:</strong> ${game.rating.toFixed(1)} / 5</p>
    </article>
  `).join("");
}


function getFilteredAndSorted() {
  const genre = genreFilter.value;
  const sort = sortBy.value;

  let filtered = [...games];
  if (genre !== "all") {
    filtered = filtered.filter(game => game.genre === genre);
  }

  if (sort === "title") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === "year") {
    filtered.sort((a, b) => b.year - a.year);
  }

  renderGames(filtered);
}


genreFilter.addEventListener("change", getFilteredAndSorted);
sortBy.addEventListener("change", getFilteredAndSorted);


renderGames(games);