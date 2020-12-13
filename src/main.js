var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var body = document.querySelector('body');
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
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



// Add your event listeners here 👇
window.addEventListener('load', generateRandomCover);
randomCoverButton.addEventListener('click', generateRandomCover);
viewSavedButton.addEventListener('click', showSavedCovers);
homeButton.addEventListener('click', generateRandomCover);
makeNewButton.addEventListener('click', showFormPage);
makeMyBookButton.addEventListener('click', saveMyBook);
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
};
function showFormPage() {
  hiddenForm.classList.remove('hidden');
  coverView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
};
function showSavedCovers() {
  savedCoversPage.classList.remove('hidden');
  coverView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
};
function saveMyBook() {
  var userCover = userCoverInput.value
  covers.push(userCover);
  var userTitle = userTitleInput.value
  titles.push(userTitle);
  var userDesc1 = userDescInput1.value
  descriptors.push(userDesc1);
  var userDesc2 = userDescInput2.value
  descriptors.push(userDesc2);
  currentCover = new Cover(userCover, userTitle, userDesc1, userDesc2);
  event.preventDefault();
  createUserCover();
};
function createUserCover() {
  coverImage.src = currentCover.cover;
  title.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
  currentCover = new Cover(coverImage.src, title.innerText, tagline1.innerText, tagline2.innerText);
  hiddenForm.classList.add('hidden');
  coverView.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  event.preventDefault();
};
function saveCover() {
  if (savedCovers.includes(currentCover)) {
    console.log(false);
  } else {
    return savedCovers.push(currentCover)
  }
};
