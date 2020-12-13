var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var body = document.querySelector('body');
var savedCovers = [];
var currentCover;
var pageLoad = document.querySelector('html');
var coverImage = document.querySelector('.cover-image');
var title = document.querySelector(`.cover-title`);
var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var hiddenForm = document.querySelector('.form-view');
var coverView = document.querySelector('.home-view');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var savedCoversPage = document.querySelector('.saved-view');
var userCoverInput = document.querySelector('.user-cover');
var userTitleInput = document.querySelector('.user-title');
var userDescInput1 = document.querySelector('.user-desc1');
var userDescInput2 = document.querySelector('.user-desc2');
var makeMyBookButton = document.querySelector('.create-new-book-button');
var savedView = document.querySelector('.saved-view');
var savedCoversSec = document.querySelector('.saved-covers-section');

// Add your event listeners here 👇
window.addEventListener('load', generateRandomCover);
randomCoverButton.addEventListener('click', generateRandomCover);
viewSavedButton.addEventListener('click', showSavedCovers);
homeButton.addEventListener('click', generateRandomCover);
makeNewButton.addEventListener('click', showFormPage);
makeMyBookButton.addEventListener('click', createUserCover);
saveCoverButton.addEventListener('click', saveCover);

// Create your event handlers and other functions here 👇

function getRandomIndex(array) {
  for ( var i = 0; i < array.length; i++) {
  var randomIndex = array[Math.floor(Math.random() * array.length)];
  }
  return randomIndex;
};
function generateRandomCover() {
  coverImage.src = getRandomIndex(covers);
  title.innerText = getRandomIndex(titles);
  tagline1.innerText = getRandomIndex(descriptors);
  tagline2.innerText = getRandomIndex(descriptors);
  hiddenForm.classList.add('hidden');
  coverView.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  saveCoverButton.disabled = false;
};
function showFormPage() {
  hiddenForm.classList.remove('hidden');
  coverView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  savedView.classList.add('hidden');
};
function saveCover() {
  event.preventDefault();
  currentCover = new Cover(coverImage.src, title.innerText, tagline1.innerText, tagline2.innerText);
  savedCovers.push(currentCover);
  saveCoverButton.disabled = true;
};
function showSavedCovers() {
  savedView.classList.remove('hidden');
  hiddenForm.classList.add('hidden');
  savedCoversPage.classList.remove('hidden');
  coverView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedCoversSec.innerHTML = "";
    for (var i = 0; i < savedCovers.length; i++) {
      savedCoversSec.innerHTML +=
      `<section class="mini-cover">
        <img class="cover-image" src=${savedCovers[i].cover}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
        </section>
        `
    };
};
function createUserCover() {
  coverImage.src = userCoverInput.value;
  title.innerText = userTitleInput.value;
  tagline1.innerText = userDescInput1.value;
  tagline2.innerText = userDescInput2.value;
  hiddenForm.classList.add('hidden');
  coverView.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  event.preventDefault();
  saveCoverButton.disabled = false;
};
