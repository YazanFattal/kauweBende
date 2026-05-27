const questions = {

  Positive: [
    "What made you smile recently?",
    "Who is someone you appreciate a lot?",
    "What is your favorite memory this year?"
  ],

  Future: [
    "Where do you see yourself in 5 years?",
    "What country would you love to live in?",
    "What is your dream job?"
  ],

  Reflective: [
    "What is something people misunderstand about you?",
    "What challenge changed you the most?",
    "What are you afraid of losing?"
  ],

  Competitive: [
    "Who would survive longest in a zombie apocalypse?",
    "Convince everyone you are secretly famous.",
    "Roast yourself in 10 seconds."
  ]
};

function goToGame(){

  document
    .getElementById("guideScreen")
    .classList.remove("active");

  document
    .getElementById("gameScreen")
    .classList.add("active");
}

function goToGuide(){

  document
    .getElementById("gameScreen")
    .classList.remove("active");

  document
    .getElementById("questionScreen")
    .classList.remove("active");

  document
    .getElementById("guideScreen")
    .classList.add("active");
}

function selectCategory(category){

  const categoryQuestions = questions[category];

  const randomQuestion =
    categoryQuestions[
      Math.floor(Math.random() * categoryQuestions.length)
    ];

  document.getElementById("questionCategory").innerText = category;

  document.getElementById("questionText").innerText = randomQuestion;

  const card = document.querySelector(".question-card");

  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "drawCard3D 0.8s ease forwards";

  document
    .getElementById("gameScreen")
    .classList.remove("active");

  document
    .getElementById("questionScreen")
    .classList.add("active");
}

function nextRound(){

  const categories = [
    "Positive",
    "Future",
    "Reflective",
    "Competitive"
  ];

  const randomCategory =
    categories[
      Math.floor(Math.random() * categories.length)
    ];

  selectCategory(randomCategory);
}

function backToCategories(){

  document
    .getElementById("questionScreen")
    .classList.remove("active");

  document
    .getElementById("gameScreen")
    .classList.add("active");
}