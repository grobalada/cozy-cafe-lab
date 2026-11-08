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

// console.log(mainPhotoEl)

const buttonEl = document.getElementById('bg-color-btn');

const bodyEl = document.querySelector('body');

// console.log(bodyEl)

const handleBackgroundChange = (() => {
    bodyEl.style.backgroundColor = 'lavender'
})

buttonEl.addEventListener('click',handleBackgroundChange);

///////////////

const ListEl = document.querySelectorAll('.specialty-status')

const soldoutBtnEl = document.querySelectorAll('.sold-out-btn')


soldoutBtnEl.forEach((button, index) => {
    if (index === 0) {
        ListEl[index].textContent = 'Available'
    } else if (index === 1) {
        ListEl[index].textContent = 'Sold Out'
    } else {
        ListEl[index].textContent = 'Available'
    }
    button.addEventListener('click', () => {
        ListEl[index].textContent = 'Sold Out';
    });
});