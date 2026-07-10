'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

function loader(){ 
  document.querySelector('.loader-container').classList.add('active'); 
} 

function fadeOut(){ 
  setTimeout(loader, 4000); 
}

fadeOut();

// function loader() {
//   // Add the 'active' class to hide the loader
//   document.querySelector('.loader-container').classList.add('active');

//   // Show the main content
//   document.querySelector('.alert').classList.add('active');
// }

// function fadeOut() {
//   setTimeout(loader, 4000); // Wait 4 seconds before hiding the loader
// }

// // Check if the loader animation has already been shown
// if (!localStorage.getItem('hasSeenLoader')) {
//   // If not shown, display the loader and set the flag
//   fadeOut();
//   localStorage.setItem('hasSeenLoader', 'true');
// } else {
//   // If already shown, skip the loader and show the content immediately
//   document.querySelector('.loader-container').classList.add('active');
//   document.querySelector('.alert').classList.add('active');
// }


// Dark mode toggle functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check user preference and apply dark mode if needed
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
}

// Toggle dark mode and save preference
darkModeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  } else {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  }
});

// // Select the countdown elements
// const daysElement = document.querySelector('.countdown [aria-label="days"]');
// const hoursElement = document.querySelector('.countdown [aria-label="hours"]');
// const minutesElement = document.querySelector('.countdown [aria-label="minutes"]');
// const secondsElement = document.querySelector('.countdown [aria-label="seconds"]');

// // Set the target end time (5 days from now)
// const endTime = new Date().getTime() + (5 * 24 * 60 * 60 * 1000); // 5 days from current time

// function updateCountdown() {
//   const now = new Date().getTime();
//   const timeLeft = endTime - now;

//   if (timeLeft <= 0) {
//     // If time is up, stop the countdown
//     clearInterval(countdownInterval);
//     daysElement.textContent = '00';
//     hoursElement.textContent = '00';
//     minutesElement.textContent = '00';
//     secondsElement.textContent = '00';
//     return;
//   }

//   // Calculate time components
//   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//   // Update the countdown elements
//   daysElement.textContent = String(days).padStart(2, '0');
//   hoursElement.textContent = String(hours).padStart(2, '0');
//   minutesElement.textContent = String(minutes).padStart(2, '0');
//   secondsElement.textContent = String(seconds).padStart(2, '0');
// }

// // Run the countdown every second
// const countdownInterval = setInterval(updateCountdown, 1000);

// // Initialize the countdown display immediately
// updateCountdown();


const compareButton = document.getElementById('compare-btn');

compareButton.addEventListener('click', () => {
  // Add functionality here
  alert('Compare functionality triggered!');
});


// var deadline = new Date("October 8, 2020 16:40:30").getTime();

// var x = setInterval(function () {
//     var currentTime = new Date().getTime();
//     var t = deadline - currentTime;

//     var days = Math.floor(t / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((t % (1000 * 60)) / 1000);

//     // Update the HTML
//     document.querySelector('.countdown [aria-label="days"]').textContent = days.toString().padStart(2, '0');
//     document.querySelector('.countdown [aria-label="hours"]').textContent = hours.toString().padStart(2, '0');
//     document.querySelector('.countdown [aria-label="minutes"]').textContent = minutes.toString().padStart(2, '0');
//     document.querySelector('.countdown [aria-label="seconds"]').textContent = seconds.toString().padStart(2, '0');

//     // When the countdown ends
//     if (t < 0) {
//         clearInterval(x);
//         document.querySelector('.countdown').textContent = "Time's up!";
//     }
// }, 1000);


// const countDownDate = new Date("Jan 9, 2025 24:00:00").getTime();

// const time = setInterval(() => {
//   const now = new Date().getTime();
//   const distance = countDownDate - now;

//   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   const offer = document.querySelector("#skcountdown");

//   offer.innerHTML =
//     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//   if (distance < 0) {
//     clearInterval(time);
//     document.getElementById("skcountdown").innerHTML = "Offer Expired";
//   }
// }, 1000);


// (function () {
//   'use strict';

//   const els = {
//     s: initElements('s'),
//     m: initElements('m'),
//     h: initElements('h'),
//   };

//   function initElements(type) {
//     const els = [{}, {}];

//     if (!['s', 'm', 'h'].includes(type)) return els;

//     const target = document.querySelector(`.flip-clock-${type}`);

//     if (!target) return els;

//     let el;

//     el = els[0];
//     el.digit = target.querySelector('.digit-left');
//     el.card = el.digit.querySelector('.card');
//     el.cardFaces = el.card.querySelectorAll('.card-face');
//     el.cardFaceA = el.cardFaces[0];
//     el.cardFaceB = el.cardFaces[1];

//     el = els[1];
//     el.digit = target.querySelector('.digit-right');
//     el.card = el.digit.querySelector('.card');
//     el.cardFaces = el.card.querySelectorAll('.card-face');
//     el.cardFaceA = el.cardFaces[0];
//     el.cardFaceB = el.cardFaces[1];

//     return els;
//   }

//   (function runClock() {
//     if (!document.hidden) {
//       const date = new Date();
//       const now = {
//         h: date.getHours(),
//         m: date.getMinutes(),
//         s: date.getSeconds(),
//       };
//       now.h = now.h < 10 ? `0${now.h}` : `${now.h}`;
//       now.m = now.m < 10 ? `0${now.m}` : `${now.m}`;
//       now.s = now.s < 10 ? `0${now.s}` : `${now.s}`;
//       now.h0 = now.h[0];
//       now.h1 = now.h[1];
//       now.m0 = now.m[0];
//       now.m1 = now.m[1];
//       now.s0 = now.s[0];
//       now.s1 = now.s[1];
//       console.log(`${now.h0}${now.h1}:${now.m0}${now.m1}:${now.s0}${now.s1}`);

//       for (const t of Object.keys(els)) {
//         for (const i of ['0', '1']) {
//           const curr = now[`${t}${i}`];
//           let next = +curr + 1;
//           if (t === 'h') {
//             if (i === '0') next = next <= 2 ? `${next}` : '0';
//             if (i === '1') next = next <= 3 ? `${next}` : '0';
//           }
//           if (t === 'm') {
//             if (i === '0') next = next <= 5 ? `${next}` : '0';
//             if (i === '1') next = next <= 9 ? `${next}` : '0';
//           }
//           if (t === 's') {
//             if (i === '0') next = next <= 5 ? `${next}` : '0';
//             if (i === '1') next = next <= 9 ? `${next}` : '0';
//           }
//           const el = els[t][i];
//           if (el && el.digit) {
//             if (!el.digit.dataset.digitBefore) {
//               el.digit.dataset.digitBefore = curr;
//               el.cardFaceA.textContent = el.digit.dataset.digitBefore;
//               el.digit.dataset.digitAfter = next;
//               el.cardFaceB.textContent = el.digit.dataset.digitAfter;
//             } else if (el.digit.dataset.digitBefore !== curr) {
//               el.card.addEventListener('transitionend', function () {
//                 el.digit.dataset.digitBefore = curr;
//                 el.cardFaceA.textContent = el.digit.dataset.digitBefore;

//                 const cardClone = el.card.cloneNode(true);
//                 cardClone.classList.remove('flipped');
//                 el.digit.replaceChild(cardClone, el.card);
//                 el.card = cardClone;
//                 el.cardFaces = el.card.querySelectorAll('.card-face');
//                 el.cardFaceA = el.cardFaces[0];
//                 el.cardFaceB = el.cardFaces[1];

//                 el.digit.dataset.digitAfter = next;
//                 el.cardFaceB.textContent = el.digit.dataset.digitAfter;
//               }, { once: true });
//               if (!el.card.classList.contains('flipped')) {
//                 el.card.classList.add('flipped');
//               }
//             }
//           }
//         }
//       }
//     }
//     setTimeout(runClock, 1000);
//   })();
// })();


// const countDownDate = new Date("Jan 9, 2025 24:00:00").getTime();

// const time = setInterval(() => {
//   const now = new Date().getTime();
//   const distance = countDownDate - now;

//   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   const offer = document.querySelector("#countdown");

//   offer.innerHTML =
//     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//   if (distance < 0) {
//     clearInterval(time);
//     document.getElementById("countdown").innerHTML = "Offer Expired";
//   }
// }, 1000);


// Set the deadline date and time
// var deadline = new Date("January 15, 2025 23:59:59").getTime();

// // Update the countdown every second
// var x = setInterval(function () {
//     var currentTime = new Date().getTime();
//     var t = deadline - currentTime;

//     if (t >= 0) {
//         // Calculate days, hours, minutes, and seconds
//         var days = Math.floor(t / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((t % (1000 * 60)) / 1000);

//         // Update the countdown values in the HTML
//         document.querySelector('.countdown [aria-label="days"]').textContent = days.toString().padStart(2, '0');
//         document.querySelector('.countdown [aria-label="hours"]').textContent = hours.toString().padStart(2, '0');
//         document.querySelector('.countdown [aria-label="minutes"]').textContent = minutes.toString().padStart(2, '0');
//         document.querySelector('.countdown [aria-label="seconds"]').textContent = seconds.toString().padStart(2, '0');
//     } else {
//         // If the countdown ends, display "Time's up!" and clear the interval
//         clearInterval(x);
//         document.querySelector('.countdown').innerHTML = "<span class='time'>Time's up!</span>";
//     }
// }, 1000);
    const deadline = new Date("January 15, 2025 23:59:59").getTime();

    const updateCountdown = () => 
    {
      const now = new Date().getTime();
      const t = deadline - now;

      if (t >= 0) 
      {
        // Calculate remaining time
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((t % (1000 * 60)) / 1000);

        // Update HTML elements
        document.querySelector('.countdown [aria-label="days"]').textContent = days.toString().padStart(2, '0');
        document.querySelector('.countdown [aria-label="hours"]').textContent = hours.toString().padStart(2, '0');
        document.querySelector('.countdown [aria-label="minutes"]').textContent = minutes.toString().padStart(2, '0');
        document.querySelector('.countdown [aria-label="seconds"]').textContent = seconds.toString().padStart(2, '0');
      } 
      else
      {
        // Handle countdown end
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = "<span class='time'>Time's up!</span>";
      }
    };

    // Start the countdown
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run immediately to avoid delay