// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/*
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnX69qCnhMTGH-zjPaCpc8MNNtvXO3d54",
  authDomain: "donard-academie.firebaseapp.com",
  projectId: "donard-academie",
  storageBucket: "donard-academie.appspot.com",
  messagingSenderId: "406132140234",
  appId: "1:406132140234:web:a5e908448ec9f7da1cec33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/

const lightbox = document.getElementById('lightbox');
lightbox.addEventListener('click', () => lightbox.classList.remove('affiche'));
const media = document.querySelector('#lightbox > article');

const setLightbox = (url) => {
  console.log(url);
  media.innerHTML = '';

  const figure = document.createElement('figure');
  figure.style.backgroundImage = `url(${url})`;
  media.appendChild(figure);

  lightbox.classList.add('affiche');
}