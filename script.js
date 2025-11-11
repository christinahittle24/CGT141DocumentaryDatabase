const genreFilter = document.getElementById("genreFilter");
const lengthFilter = document.getElementById("lengthFilter");
const platformFilter = document.getElementById("platformFilter");
const cards = document.querySelectorAll(".doc-card");

function filterDocs() {
  const genre = genreFilter.value;
  const length = lengthFilter.value;
  
  const platform = platformFilter ? platformFilter.value : "all";
    
  cards.forEach(card => {
    const matchesGenre = genre === "all" || card.dataset.genre === genre;
    const matchesLength = length === "all" || card.dataset.length === length;
    const matchesPlatform = platform === "all" || card.dataset.platform === platform;

    card.style.display =
      (matchesGenre && matchesLength && matchesPlatform)
        ? "block"
        : "none";
  });
}

genreFilter.addEventListener("change", filterDocs);
lengthFilter.addEventListener("change", filterDocs);
if (platformFilter) platformFilter.addEventListener("change", filterDocs);
