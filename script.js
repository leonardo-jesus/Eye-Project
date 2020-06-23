//ACCESS THE BUTTONS
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const oval = document.getElementById('oval');
const rectangle = document.getElementById('rectangle')
const container = document.getElementById('container')
const title = document.getElementById('title')

//MAKE FUNCTIONS TO THE BUTTONS
function makeSquare() {
  container.style.width = '350px';
  container.style.height = '350px';
  container.style.borderRadius = '0%';
  title.textContent = 'SQUARE'
}

function makeCircle() {
  container.style.width = '350px';
  container.style.height = '350px';
  container.style.borderRadius = '100%';
  title.textContent = 'CIRCLE'
}

function makeOval() {
  container.style.width = '600px';
  container.style.height = '350px';
  container.style.borderRadius = '50%';
  title.textContent = 'OVAL'
}

function makeRectangle() {
  container.style.width = '700px';
  container.style.height = '350px';
  container.style.borderRadius = '0%';
  title.textContent = 'RECTANGLE'
}


//CALL THE FUNCTIONS WHEN THE BUTTON IS CLICKED
square.addEventListener('click', makeSquare);
circle.addEventListener('click', makeCircle);
oval.addEventListener('click', makeOval);
rectangle.addEventListener('click', makeRectangle);