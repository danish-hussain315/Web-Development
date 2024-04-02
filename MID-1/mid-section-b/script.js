
const container = document.getElementByClassName('container');

const imgContainer = document.getElementByClassName("imgContainer");

const viewImage = document.createElement('img');
viewImage.src = './one.svg';

imgContainer.appendChild(viewImage);

const prebtn = document.getElementByClassName('left');
prebtn.onClick = showPreviousImage;

const nextbtn = document.getElementByClassName('right');
prebtn.onClick = showPreviousImage;


function showPreviousImage(){

}
