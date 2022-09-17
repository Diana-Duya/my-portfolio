const cardWorks = [
  {
    h1: 'Multi Post Stories',
    image: 'image/Snapshoot Portfolio.png',
    live: 'https://diana-duya.github.io/my-portfolio/',
    source: 'https://github.com/Diana-Duya/my-portfolio',
  },
  {
    h1: 'Multi Post Stories',
    image: 'image/Snapshoot Portfolio.png',
    live: 'https://diana-duya.github.io/my-portfolio/',
    source: 'https://github.com/Diana-Duya/my-portfolio',
  },
  {
    h1: 'Multi Post Stories',
    image: 'image/Snapshoot Portfolio.png',
    live: 'https://diana-duya.github.io/my-portfolio/',
    source: 'https://github.com/Diana-Duya/my-portfolio',
  },

];

const projectButton = document.querySelectorAll('.alert');
projectButton.forEach((element) => {
  element.addEventListener('click', () => {
    const popUp = document.querySelector('.popup');
    const blurry = document.querySelector('.back');
    const descr = document.querySelector('.descr');
    const image = document.querySelector('.pp-img');
    const link1 = document.querySelector('#link1');
    const link2 = document.querySelector('#link2');

    // To blur the background
    blurry.style = 'display : block';
    popUp.classList.remove('popup1');

    descr.innerHTML = cardWorks[0].h1;
    image.src = cardWorks[0].image;
    link1.href = cardWorks[0].live;
    link1.target = '_blank';
    link2.href = cardWorks[0].source;
    link2.target = '_blank';
  });
});

const closeButton = document.querySelector('.exe');
closeButton.addEventListener('click', () => {
  const popUp = document.querySelector('.popup');
  const blurry = document.querySelector('.back');
  popUp.classList.add('popup1');
  blurry.style = 'display : none';
});

const form = document.querySelector('.form');
const email = document.querySelector('#email');
const error = document.querySelector('.error');

function checkEmail(Diana) {
  if (Diana.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  return false;
}
const custmr = document.getElementById('name');
const txt = document.getElementById('message');

function storeData() {
  const testObject = {
    userID: custmr.value,
    email: email.value,
    message: txt.value,
  };
  localStorage.setItem('store', JSON.stringify(testObject));
}
const emptyObject = JSON.parse(localStorage.getItem('store'));

custmr.value = emptyObject.userID;
email.value = emptyObject.email;
txt.value = emptyObject.message;

form.addEventListener('submit', (e) => {
  if (checkEmail(email.value)) {
    error.textContent = '';
    storeData();
  } else {
    storeData();
    e.preventDefault();
    error.textContent = 'Enter a valid email';
  }
});
