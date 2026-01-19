/* ------------------------ */
/* Collapse mobile nav menu */
/* ------------------------ */

const menuIcon = document.getElementById("menuIcon");
const links = document.getElementById("links");

/* menu icon gets transformed and mobile menu is being displayed */
  menuIcon.addEventListener("click", () => {
    /* toggle button animation */
    menuIcon.classList.toggle("active");
    links.classList.toggle("collapsed");
  });


/* ---------------------------------------------------------------------- */

/* -------------------------- */
/* Popup handling for booking */
/*  and info-banner (on home) */
/* -------------------------- */


const bookingButtons = document.querySelectorAll(".booking-button"); // Some Pages have multiple booking buttons
const lomiCards = document.querySelectorAll(".lomi-cards .card"); //only for offer page
const bookingPopup = document.getElementById("booking-popup");
const bookingPopupLink = document.querySelector("#booking-popup .flex a");
const infoPopup = document.getElementById("info-popup");
const closeButtons = document.querySelectorAll(".close"); // Homepage can have infoPopup and bookingPopup
const curtainElement = document.querySelector(".curtain");

/* 
  Contains the default Link for nav button.
  When bookingButton is clicked from card (offer.html) the link will be exchanged with specific product Link
*/

const timifyDefaultLink = "https://book.timify.com/services?accountId=608c2450481bbc11777a2660&hideCloseButton=true";
let timifyLink = timifyDefaultLink;

//! Don't change sequence
//? Contains the timify booking links for each specific Lomi-Product in the sequence presented on the page 
const timifySpecificLinks = [
  "https://apps.timify.com/sharable-link/6d212aecc3/1.0.0",
  "https://apps.timify.com/sharable-link/060116e9ea/1.0.0",
  "https://apps.timify.com/sharable-link/6c4e2a3c86/1.0.0", 
  "https://apps.timify.com/sharable-link/f00d650a0b/1.0.0",
  "https://apps.timify.com/sharable-link/e0192cf160/1.0.0"
];


/* ---------------------------------------------------------------------- */
/* handler */

// close all popups and remove blur background (hide curtainElement)
const handleCloseAllPopups = (e) => {
  const wasClickInPopup = e.target.closest("aside");
  const isClickedACloseButton = Array.from(closeButtons).includes(e.target.closest(".close"));
  
  /* Close Popup, if clicked outside of Popup or on "X" (closeButton) */
  if (!wasClickInPopup || isClickedACloseButton) {
    bookingPopup.classList.remove("open");
    curtainElement.classList.remove("open");
    if (infoPopup) {
      infoPopup.classList.remove("open");
    }

    /* Remove event listener, if popup is closed */
    document.body.removeEventListener("click", handleCloseAllPopups);
  }
  
};

// open bookingPopup, use correct booking link, and blur background (show curtainElement)
const handleBookingButtonClick = (e) => {
  /* Reset variable with default value, in case it was previously exchanged */
  timifyLink = timifyDefaultLink;

  const lomiCard = e.target.closest(".card");
  
  /* Use only on offer.html check, if the booking Link needs to be exchanged */
  if (lomiCard) exchangeTimifyLink(lomiCard);

  /* in any case rewrite href of booking link - back to default or to a specific one */
  bookingPopupLink.href = timifyLink;
  
  bookingPopup.classList.add("open"); // Show Popup
  curtainElement.classList.add("open"); // Blur Background
  
  /* prevent immediate closing of popup by body listener below */
  e.stopPropagation();
  
  /* Will allow closing of popup if clicked on "X" or outside of Popup */
  document.body.addEventListener("click", handleCloseAllPopups);

};

/* ---------------------------------------------------------------------- */
/* Helper */

// (Only on offer.html) if bookingButton in the lomi card was selected, the timifyLink Variable will be exchange with the respective value one from [timifySpecificLinks]
const exchangeTimifyLink = (card) => {  
  /* Extracting the number from the class-name (e.g. card-2 -> 2) */
  const cardNumber = Number(card.classList[card.classList.length - 1].slice(-1));
  timifyLink = timifySpecificLinks[cardNumber - 1];
  
}


/* ---------------------------------------------------------------------- */
/* rules */

/* 
  In case by hardcoding the Info-Popup is visible on the main page, 
  allow the opportunity to close popups once 
*/
document.body.addEventListener("click", handleCloseAllPopups);

/* Every booking button will open the bookingPopup */
bookingButtons.forEach(button => button.addEventListener("click", handleBookingButtonClick));