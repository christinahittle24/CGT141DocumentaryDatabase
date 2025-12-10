const genreButtons = document.querySelectorAll('.genre-card');
const platformButtons = document.querySelectorAll('.platform-card');
const lengthButtons = document.querySelectorAll('.length-card');
const cards = document.querySelectorAll('.doc-card');

let selectedGenre = 'all';
let selectedPlatform = 'all';
let selectedLength = 'all';

function filterCards() {
  cards.forEach(card => {
    const cardGenre = card.getAttribute('data-genre');
    const cardPlatform = card.getAttribute('data-platform');
    const cardLength = card.getAttribute('data-length');

    const genreMatch = (selectedGenre === 'all' || cardGenre === selectedGenre);
    const platformMatch = (selectedPlatform === 'all' || cardPlatform === selectedPlatform);
    const lengthMatch = (selectedLength === 'all' || cardLength === selectedLength);



    if (genreMatch && lengthMatch && platformMatch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}


genreButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedGenre = button.getAttribute('value');
    

    genreButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    filterCards();

    });
  });

platformButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedPlatform = button.getAttribute('value');
    

    platformButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    filterCards();

    });
  });



lengthButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedLength = button.getAttribute('value');
    

    lengthButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    filterCards ();
      });
    });


 