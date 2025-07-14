const allQuizzes = {
 html: [
  {
    question: "1. What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Highlevel Text Machine Language"
    ],
    answer: 0
  },
  {
    question: "2. What is the correct HTML element for inserting a line break?",
    options: [
      "&lt;break&gt;",
      "&lt;br&gt;",
      "&lt;lb&gt;",
      "&lt;line&gt;"
    ],
    answer: 1
  },
  {
    question: "3. Which tag is used to define an unordered list?",
    options: [
      "&lt;ul&gt;",
      "&lt;ol&gt;",
      "&lt;list&gt;",
      "&lt;li&gt;"
    ],
    answer: 0
  },
  {
    question: "4. Which attribute is used to provide a tooltip for an element?",
    options: [
      "title",
      "tooltip",
      "alt",
      "label"
    ],
    answer: 0
  },
  {
    question: "5. What does the &lt; and &gt; tag define?",
    options: [
      "An anchor (hyperlink)",
      "An article",
      "An address",
      "An alert"
    ],
    answer: 0
  },
  {
    question: "6. How do you create a checkbox in HTML?",
    options: [
      "&lt;input type='checkbox'&gt;",
      "&lt;checkbox&gt;",
      "&lt;input checkbox='true'&gt;",
      "&lt;check&gt;"
    ],
    answer: 0
  },
  {
    question: "7. Which HTML tag is used to display a picture on a webpage?",
    options: [
      "&lt;img&gt;",
      "&lt;picture&gt;",
      "&lt;src&gt;",
      "&lt;image&gt;"
    ],
    answer: 0
  },
  {
    question: "8. Which tag is used to create a dropdown list?",
    options: [
      "&lt;select&gt;",
      "&lt;dropdown&gt;",
      "&lt;list&gt;",
      "&lt;option&gt;"
    ],
    answer: 0
  },
  {
    question: "9. What is the purpose of the &lt;head&gt; tag in HTML?",
    options: [
      "To define the header of a document",
      "To store metadata and links",
      "To define headings",
      "To add footer scripts"
    ],
    answer: 1
  },
  {
    question: "10. What is the default alignment of text inside a &lt;p&gt; tag?",
    options: [
      "Left",
      "Center",
      "Right",
      "Justify"
    ],
    answer: 0
  }
], 
computer: [
  {
    question: "1. What is the brain of the computer?",
    options: ["CPU", "Monitor", "RAM", "Hard Drive"],
    answer: 0
  },
  {
    question: "2. Which device is used to input text into a computer?",
    options: ["Monitor", "Mouse", "Keyboard", "Speaker"],
    answer: 2
  },
  {
    question: "3. Which of the following is an output device?",
    options: ["Scanner", "Mouse", "Monitor", "Microphone"],
    answer: 2
  },
  {
    question: "4. What does RAM stand for?",
    options: [
      "Random Access Memory",
      "Read Access Memory",
      "Ready Available Memory",
      "Run Accept Memory"
    ],
    answer: 0
  },
  {
    question: "5. Which storage device is used to permanently store data?",
    options: ["RAM", "Cache", "Hard Disk", "Register"],
    answer: 2
  },
  {
    question: "6. What type of software is MS Word?",
    options: [
      "System Software",
      "Application Software",
      "Utility Software",
      "Operating System"
    ],
    answer: 1
  },
  {
    question: "7. Which of the following is NOT an operating system?",
    options: ["Windows", "Linux", "Oracle", "macOS"],
    answer: 2
  },
  {
    question: "8. What is the function of an operating system?",
    options: [
      "To manage computer hardware",
      "To run applications",
      "To provide user interface",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "9. Which key is used to refresh a webpage in most browsers?",
    options: ["F5", "F1", "F12", "Esc"],
    answer: 0
  },
  {
    question: "10. What is the full form of URL?",
    options: [
      "Uniform Resource Locator",
      "Unified Resource Link",
      "Universal Reference Link",
      "Uniform Reference Locator"
    ],
    answer: 0
  }
],
css: [
  {
    question: "1. What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Syntax",
      "Colorful Style Sheet"
    ],
    answer: 0
  },
{
  question: "2. Which HTML tag is used to link an external CSS file?",
  options: ["&lt;style&gt;", "&lt;css&gt;", "&lt;link&gt;", "&lt;script&gt;"],
  answer: 2
}
,
  {
    question: "3. How do you select an element with the ID 'header' in CSS?",
    options: ["#header", ".header", "*header", "header"],
    answer: 0
  },
  {
    question: "4. Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "background"],
    answer: 2
  },
  {
    question: "5. What is the default position value of an HTML element?",
    options: ["relative", "fixed", "static", "absolute"],
    answer: 2
  },
  {
    question: "6. How do you make a text bold in CSS?",
    options: [
      "font-weight: bold;",
      "text-weight: bold;",
      "font: bold;",
      "style: bold;"
    ],
    answer: 0
  },
  {
    question: "7. Which CSS property controls the text size?",
    options: ["text-size", "font-size", "font-style", "text-style"],
    answer: 1
  },
  {
    question: "8. How do you select all paragraph elements in CSS?",
    options: ["#p", ".p", "p", "*p"],
    answer: 2
  },
  {
    question: "9. What does the z-index property control?",
    options: [
      "Element rotation",
      "Layer stacking order",
      "Element spacing",
      "Text alignment"
    ],  
    answer: 1
  },
  {
    question: "10. Which unit is relative to the font-size of the parent element?",
    options: ["px", "em", "%", "vh"],
    answer: 1
  }
],
js: [
  {
    question: "1. What is JavaScript primarily used for?",
    options: [
      "Styling web pages",
      "Structuring web content",
      "Making web pages interactive",
      "Accessing databases"
    ],
    answer: 2
  },
  {
    question: "2. How do you write a comment in JavaScript?",
    options:  ["<!-- comment -->", "# This is a comment", "// This is a comment", "/* comment */"],
    answer: 2
  },
  {
    question: "3. Which data type is NOT primitive in JavaScript?",
    options: ["Number", "String", "Boolean", "Object"],
    answer: 3
  },
  {
    question: "4. How do you define a function in JavaScript?",
    options: [
      "function:myFunction()",
      "function = myFunction()",
      "function myFunction()",
      "define myFunction()"
    ],
    answer: 2
  },
  {
    question: "5. Which symbol is used for strict equality?",
    options: ["==", "===", "=", "!="],
    answer: 1
  },
  {
    question: "6. What is the output of typeof null?",
    options: ["'object'", "'null'", "'undefined'", "'number'"],
    answer: 0
  },
  {
    question: "7. How do you create an array in JavaScript?",
    options: [
      "let arr = (1,2,3)",
      "let arr = {1,2,3}",
      "let arr = [1,2,3]",
      "let arr = <1,2,3>"
    ],
    answer: 2
  },
  {
    question: "8. Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "concat()"],
    answer: 0
  },
  {
    question: "9. How can you convert a string to an integer in JS?",
    options: ["parseInt()", "parseFloat()", "int()", "Number.toInt()"],
    answer: 0
  },
  {
    question: "10. Which keyword is used to declare a constant?",
    options: ["let", "var", "const", "define"],
    answer: 2
  }
],
bootstrap: [
  {
    question: "1. What is Bootstrap primarily used for?",
    options: [
      "Server-side development",
      "Database management",
      "Front-end responsive design",
      "Image editing"
    ],
    answer: 2
  },
  {
    question: "2. Which class creates a button in Bootstrap?",
    options: [".btn", ".button", ".click", ".submit"],
    answer: 0
  },
  {
    question: "3. What does the Bootstrap grid system use?",
    options: ["Rows and columns", "Divs and spans", "Tables and cells", "Sections and articles"],
    answer: 0
  },
  {
    question: "4. How many columns are in Bootstrap’s default grid?",
    options: ["10", "12", "16", "24"],
    answer: 1
  },
  {
    question: "5. What does the class 'container-fluid' do?",
    options: [
      "Creates a fixed-width container",
      "Creates a full-width container",
      "Adds padding",
      "Centers the text"
    ],
    answer: 1
  },
  {
    question: "6. Which Bootstrap class is used to hide an element?",
    options: [".hide", ".d-none", ".invisible", ".hidden"],
    answer: 1
  },
  {
    question: "7. What is the purpose of the 'card' class in Bootstrap?",
    options: [
      "To create alert boxes",
      "To create containers for flexible content",
      "To define columns",
      "To style form inputs"
    ],
    answer: 1
  },
  {
    question: "8. How do you make a button large in Bootstrap?",
    options: [".btn-large", ".btn-xl", ".btn-lg", ".btn-big"],
    answer: 2
  },
  {
    question: "9. Which class adds margin in Bootstrap?",
    options: [".m", ".margin", ".mb", ".p"],
    answer: 2
  },
  {
    question: "10. Which CDN is commonly used to include Bootstrap in a project?",
    options: [
      "Google CDN",
      "BootstrapCDN",
      "jsDelivr",
      "FontAwesomeCDN"
    ],
    answer: 1
  }
]




};
const selectedQuiz = localStorage.getItem("selectedQuiz") || "html";
const quizData = allQuizzes[selectedQuiz] || [];

let currentIndex = 0;
let score = 0;
let selectedOption = null;
const userName = localStorage.getItem("username") || "User";

// Map of quiz titles
const quizTitles = {
  html: "HTML Basics",
  css: "CSS Styling",
  js: "JavaScript Essentials",
  computer: "Computer Basics",
  bootstrap: "Bootstrap Mastery"
};

// Set username and quiz title
document.getElementById("userName").innerText = userName;
document.getElementById("quizTitleText").innerText = quizTitles[selectedQuiz] || "General Quiz";

// Core elements
const finalUserSpan = document.getElementById("finalUserName");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");

function loadQuestion() {
  const q = quizData[currentIndex];
  questionText.innerText = q.question;
  optionsContainer.innerHTML = "";
  q.options.forEach((opt, index) => {
    const optId = `opt${index}`;
    optionsContainer.innerHTML += `
      <input type="radio" name="option" id="${optId}" value="${index}" ${selectedOption === index ? 'checked' : ''}>
      <label for="${optId}">${opt}</label>
    `;
  });

  // Add event listener to each option
  Array.from(optionsContainer.querySelectorAll('input[type="radio"]')).forEach(radio => {
    radio.addEventListener('change', function () {
      selectedOption = parseInt(this.value);
    });
  });

  // Update progress bar
  const progress = ((currentIndex) / quizData.length) * 100;
  document.getElementById("progressBar").style.width = `${progress}%`;
}

function showResult() {
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("resultBox").style.display = "block";
  finalUserSpan.innerText = userName;
  document.getElementById("scoreDisplay").innerText = score;
  document.getElementById("resultMessage").innerText = score >= 6
    ? "🎉 Congratulations, You Passed!"
    : "❌ Better luck next time.";
  document.getElementById("progressBar").style.width = `100%`;
}

function startTimer(duration) {
  let time = duration;
  const timerDisplay = document.getElementById("timer");
  const countdown = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (--time < 0) {
      clearInterval(countdown);
      showResult();
    }
  }, 1000);
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (selectedOption === null) return alert("Please select an option!");
  if (selectedOption == quizData[currentIndex].answer) score++;
  currentIndex++;
  selectedOption = null;
  if (currentIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    selectedOption = null;
    loadQuestion();
  }
});

loadQuestion();
startTimer(60 * 20);
