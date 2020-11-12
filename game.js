// Image Array
let images = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 
'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

// Image 1
let randomNumber1 = Math.floor(Math.random() * 6);
let randomImage1 = images[randomNumber1];
let image1 = document.querySelectorAll('img')[0];
image1.setAttribute("src", randomImage1);

// Image 2
let randomNumber2 = Math.floor(Math.random() * 6);
let randomImage2 = images[randomNumber2];
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

// Change title to declare winner

// If player 1 wins
if(randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML ="🚩 Player 1 Wins!!";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML ="🚩 Player 2 Wins!!";
}
else {
    document.querySelector('h1').innerHTML ="🚩 Draw!!";
}