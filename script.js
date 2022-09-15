let cardWorks = [
    {
      h1 : 'Multi Post Stories',
      image : "image/Snapshoot Portfolio.png" ,
      live : 'https://diana-duya.github.io/my-portfolio/',
      source : 'https://github.com/Diana-Duya/my-portfolio',  
    },
    {
        h1 : 'Multi Post Stories',
        image : "image/Snapshoot Portfolio.png" ,
        live : 'https://diana-duya.github.io/my-portfolio/',
        source : 'https://github.com/Diana-Duya/my-portfolio',  
      },
      {
        h1 : 'Multi Post Stories',
        image : "image/Snapshoot Portfolio.png" ,
        live : 'https://diana-duya.github.io/my-portfolio/',
        source : 'https://github.com/Diana-Duya/my-portfolio',  
      }
      
]

function seeProject(){
    let popUp = document.querySelector('.popup');
    let blurry = document.querySelector('.back');
    let descr = document.querySelector('.descr');
    let image = document.querySelector('.pp-img');
    let link1 = document.querySelector('#link1');
    let link2 = document.querySelector('#link2');

    // To blur the background
    blurry.style = 'display : block'
    popUp.classList.remove('popup1');
    
    descr.innerHTML = cardWorks[0].h1;
    image.src = cardWorks[0].image;
    link1.href = cardWorks[0].live;
    link2.href = cardWorks[0].source;
    console.log('CHALLOW');
}

function closePopup() {
    let popUp = document.querySelector('.popup');
    let blurry = document.querySelector('.back');
    popUp.classList.add('popup1');
    blurry.style = 'display : none';
}