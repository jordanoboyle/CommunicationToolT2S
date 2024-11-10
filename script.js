//DOM elements
const main = document.querySelector('main');
const voiceSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

// Data for the display (all my images are local, but you could pull them randomly)
const data = [
  {
    image: './img/drink.jpg',
    text: "I am Thirsty"
  },
  {
    image: './img/food.jpg',
    text: "I am Hungry"
  },
  {
    image: './img/angry.jpg',
    text: "I am Angry "
  },
  {
    image: './img/sad.jpg',
    text: "I am Sad"
  },
  {
    image: './img/scared.jpg',
    text: "I am Scared."
  },
  {
    image: './img/happy.jpg',
    text: "I am Happy"
  },
  {
    image: './img/tired.jpg',
    text: "I am Tired."
  },
  {
    image: './img/hurt.jpg',
    text: "I am Hurt" 
  },
  {
    image: './img/cat.jpg',
    text: "I like the Cat"
  },
  {
    image: './img/dog.jpg',
    text: "I like the Dog "
  },
  {
    image: './img/outside.jpg',
    text: "I want to be Outside"
  },
  {
    image: './img/playgames.jpg',
    text: "I want to play Games."
  },
  {
    image: './img/school.jpg',
    text: "I want to go to School."
  },
];


data.forEach(speechBox => {
  createBox(speechBox);

});

// Create the boxes for speech
function createBox(item) {
  // console.log(item);
  const box = document.createElement('div');
  
  const {image, text} = item;  //This is known as desctructuring. Basically assigning elements within item to vars

  box.classList.add('box');
  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info wiggle">${text}</p>  
  `;
  // needed "info wiggle" for class targetting in each new grid box.

  //@Eventual speak effect
  main.appendChild(box);

  wiggleText(box.querySelector('.wiggle'))
}



function wiggleText(element) {
  let SOURCE_TEXT = element.textContent;
  const $characters = [];
  SOURCE_TEXT.split('').forEach((char, idx) => {
    const $char = document.createElement('span');
    $char.textContent = char;

    //Staggering the wiggle

    $char.style.setProperty('animation-delay',
      `${idx * -150}ms`
    );
    $characters.push($char);
  });

  element.innerHTML = '';
  $characters.forEach($char => element.appendChild($char));
}

