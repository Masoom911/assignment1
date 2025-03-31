/* // <!--
    // Name: Masoom Yosofi
    // File: style.css
    // Date: wednesday February 26
    // image generator */
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArr = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

/* Declaring the alternative text for each image file */
const imgAlts = [
    {"pic1": "A blue human eye"},
    {"pic2": "A Rock the shape of a wave"}, 
    {"pic3": "purple and white pansies"}, 
    {"pic4": "A part of a wall from pharoah's tomb"}, 
    {"pic5": "A moth on a leaf"}
];
/* Looping through images */
for (let i = 0; i < imgArr.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + imgArr[i]);
  newImage.setAttribute('alt', imgAlts[i]["pic" + (i + 1)]);
  thumbBar.appendChild(newImage);
}



/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  if (btn.getAttribute("class") === "dark") {
      btn.setAttribute("class", "light");
      btn.textContent = "Lighten";
      overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
  } else {
      btn.setAttribute("class", "dark");
      btn.textContent = "Darken";
      overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
  }
});

/* Add a click event listener to each thumbnail */
  thumbBar.addEventListener("click", (event) => {
    displayedImage.setAttribute('src', event.target.getAttribute('src'));
    displayedImage.setAttribute('alt', event.target.getAttribute('alt'));
});