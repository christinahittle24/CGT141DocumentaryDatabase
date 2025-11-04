const genreFilter = document.getElementById("genreFilter");
const lengthFilter = document.getElementById("lengthFilter");
const cards = document.querySelectorAll(".doc-card");

function filterDocs() {
  const genre = genreFilter.value;
  const length = lengthFilter.value;
    
  cards.forEach(card => {
    const matchesGenre = genre === "all" || card.dataset.genre === genre;
    const matchesLength = length === "all" || card.dataset.length === length;

    if (matchesGenre && matchesLength) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
 });
}
genreFilter.addEventListener("change", filterDocs);
lengthFilter.addEventListener("change", filterDocs);