const imageContainer = document.querySelector(".imageContainer");
const loader = document.querySelector(".loaderContainer");
let sentinel = document.getElementById("sent");

let photosArr = [];
// URL
let count = 1;
let counter = 0;
const apiURL = `https://jsonplaceholder.typicode.com/albums/${count}/photos`;

async function getPhotos() {
  try {
    const res = await fetch(apiURL);
    photosArr = await res.json();
    console.log(photosArr);
    displayPhotos();
    count++;   
  } catch (err) {
    console.log(err);
  }
}

function displayPhotos() {
  photosArr.forEach((photo) => {
    let a = document.createElement("a");
    a.setAttribute("href", photo.url);
    a.setAttribute("target", "_blank");
    let img = document.createElement("img");
    img.setAttribute("src", photo.url);
    img.setAttribute("title", photo.title);

    a.appendChild(img);
    imageContainer.appendChild(a);
  });
}

let observer = new IntersectionObserver(
  (entries) => {
    let obj = entries[entries.length - 1];
    if (obj.isIntersecting) {
      getPhotos();
    }
  },
  { threshold: 0.1 }
);

observer.observe(sentinel);
