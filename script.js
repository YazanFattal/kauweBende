let currentLanguage = "en";

const categories = ["Positive", "Future", "Reflective", "Competitive"];

const translations = {
  en: {
    guideTitle: "Welcome to Kauwe Bende",
    guideDescription:
      "A playful conversation game where players answer hidden questions, switch categories, and discover different types of social challenges.",
    rule1: "Choose a language and start the game.",
    rule2: "The question stays hidden until the card is revealed.",
    rule3: "After each round, the next category is chosen randomly.",
    rule4: "Be honest, respectful, and have fun.",
    startButton: "Start Game",
    gameTitle: "Draw a Random Card",
    gameSubtitle: "Click the card to reveal a question",
    cardTitle: "Draw a Card",
    cardText: "Click to reveal your first question",
    leaveButton: "Leave Game"
  },

  nl: {
    guideTitle: "Welkom bij Kauwe Bende",
    guideDescription:
      "Een speels gespreksspel waarin spelers verborgen vragen beantwoorden, van categorie wisselen en verschillende sociale uitdagingen ontdekken.",
    rule1: "Kies een taal en start het spel.",
    rule2: "De vraag blijft verborgen totdat de kaart wordt onthuld.",
    rule3: "Na elke ronde wordt automatisch een nieuwe categorie gekozen.",
    rule4: "Wees eerlijk, respectvol en heb plezier.",
    startButton: "Start spel",
    gameTitle: "Trek een willekeurige kaart",
    gameSubtitle: "Klik op de kaart om een vraag te onthullen",
    cardTitle: "Trek een kaart",
    cardText: "Klik om je eerste vraag te onthullen",
    leaveButton: "Spel verlaten"
  }
};

const questions = {
  en: {
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
  },

  nl: {
    Positive: [
      "Wat of iemand maakt je altijd blij?",
      "Wat maakte je de afgelopen week blij?",
      "Waar ben je nu beter in dan een jaar geleden?",
      "Op welk talent ben je trots?",
      "Wat is een recente overwinning waar je trots op bent?"
    ],
    Future: [
      "Hoe zou jouw ideale toekomst eruitzien?",
      "Wat betekent succes voor jou?",
      "Welke vaardigheid zou je graag willen leren?",
      "Hoe zou je ideale weekend eruitzien?",
      "Waar wil je je zelfverzekerder in voelen?"
    ],
    Reflective: [
      "Waarover ben je van gedachten veranderd?",
      "Wat zou je willen dat mensen beter over je begrepen?",
      "Waar ben je hoopvol over?",
      "Welke eigenschappen waardeer je in vriendschap?",
      "Wat helpt je om te kalmeren als je gestrest bent?"
    ],
    Competitive: [
      "Is competitie motiverend of stressvol?",
      "Welk socialmediaplatform is het ergst?",
      "Zijn memes kunst of rommel?",
      "Wat is belangrijker: met wie je bent of wat je doet?",
      "Wat is moeilijker: ergens aan beginnen of iets afmaken?"
    ]
  }
};

function changeLanguage(language) {
  currentLanguage = language;
  const t = translations[language];

  document.getElementById("guideTitle").innerText = t.guideTitle;
  document.getElementById("guideDescription").innerText = t.guideDescription;
  document.getElementById("rule1").innerText = t.rule1;
  document.getElementById("rule2").innerText = t.rule2;
  document.getElementById("rule3").innerText = t.rule3;
  document.getElementById("rule4").innerText = t.rule4;
  document.getElementById("startButton").innerText = t.startButton;
  document.getElementById("gameTitle").innerText = t.gameTitle;
  document.getElementById("gameSubtitle").innerText = t.gameSubtitle;
  document.getElementById("leaveButton").innerText = t.leaveButton;

  resetDrawCard();
}

function resetDrawCard() {
  const t = translations[currentLanguage];
  const title = document.getElementById("drawCardTitle");

  title.innerText = t.cardTitle;
  document.getElementById("drawCardText").innerText = t.cardText;

  title.classList.remove(
    "category-positive-text",
    "category-future-text",
    "category-reflective-text",
    "category-competitive-text"
  );
}

function goToGame() {
  document.getElementById("guideScreen").classList.remove("active");
  document.getElementById("gameScreen").classList.add("active");
  resetDrawCard();
}

function goToGuide() {
  document.getElementById("gameScreen").classList.remove("active");
  document.getElementById("guideScreen").classList.add("active");
}

function drawFirstCard() {
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];

  const categoryQuestions = questions[currentLanguage][randomCategory];

  const randomQuestion =
    categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];

  const title = document.getElementById("drawCardTitle");
  const text = document.getElementById("drawCardText");
  const card = document.querySelector(".draw-card");

  title.innerText = randomCategory;
  text.innerText = randomQuestion;

  title.classList.remove(
    "category-positive-text",
    "category-future-text",
    "category-reflective-text",
    "category-competitive-text"
  );

  title.classList.add(
    "category-" + randomCategory.toLowerCase() + "-text"
  );

  card.classList.remove("reveal");
  void card.offsetWidth;
  card.classList.add("reveal");
}

changeLanguage("en");