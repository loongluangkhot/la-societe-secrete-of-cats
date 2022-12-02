const catPhotos = [
  "cat0.webp",
  "cat1.gif",
  "cat2.jpg",
  "cat3.jpg",
  "cat4.jpg",
  "cat5.jpg",
].map((fileName) => `./photos/cats/${fileName}`);

const dogPhotos = [
  "dog0.jpg",
  "dog1.gif",
  "dog2.jpg",
  "dog3.jpg",
  "dog4.png",
  "dog5.jpg",
].map((fileName) => `./photos/dogs/${fileName}`);

const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

document.addEventListener("DOMContentLoaded", () => {
  const catBtnElem = document.querySelector("#cat-btn");
  const catImgElem = document.querySelector("#cat-img");
  catBtnElem.addEventListener("click", () => {
    catImgElem.src = pickRandom(catPhotos);
  });
});
