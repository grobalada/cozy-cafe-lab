// console.log('Cozy Cafe JavaScript is connected!');
 const mainTitleEl = document.getElementById('main-title');

//  console.log(mainTitleEl)

 mainTitleEl.textContent = 'Welcome to the Cozy Cafe'

 const highlightTitleEl = document.querySelectorAll('.highlight-title')

//  console.log(highlightTitleEls)

// highlightTitleEls.forEach((element) => {
//     console.log(element.textContent);
//     element.style.fontStyle = 'italic';
// })

// const secondaryTitle = document.querySelector('#quote-of-the-day')

// secondaryTitle.textContent = 'One sip, Instant Happiness'

// secondaryTitle.classList.add('featured');

// console.log(secondaryTitle);

const mainPhotoEl = document.querySelector('#main-photo')

const currentSrc = mainPhotoEl.getAttribute('src');

// console.log(currentSrc);

mainPhotoEl.setAttribute('src','./assets/berry-cake.jpg');
mainPhotoEl.setAttribute('alt','A berry cake served at the cafe');

console.log(mainPhotoEl)