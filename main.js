console.log("The best things in life are yet to come.")

//Consider adding images as a stretch goal

const students = [];

const houses = [
   "Ravenclaw",
   "Slytherin",
   "Hufflepuff",
   "Gryffindor"
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML += textTpPrint;      //had =, needed +=
}

const studentBuilder = (taco) => {    //taco represents an array
  let domString = '';
  for (let i = 0; i < taco.length; i++) {
    domString += `"card d-flex mx-auto text-center" style="width: 16em; height: 12em"
    <h5 class="card-header">STUDENT</h5>
    <div class="card-body">
<h5 class="card-title">${taco[i].studentName}</h5>
<p class="card-text">${taco[i].house}</p>
<button type="button" class="btn btn-danger" id="${i}">Expel Student</button>
</div>
</div>`;
}

printToDom('#students', domString);

};

// const handleButtonClick = (event) {
//   const buttonId = event.target.id;
// };

  //need if stmt/ buttonid === btn, query #form/inner html = `form text/layout from html` and doc/query (#sort") and add EL passing event and function as arguments

//Need arrow function to get the form info passing the event as an argument/callback function then define event.preventDefault() - within function define name to equal doc querysel to target ("#name")value, and define const randomhouseindex to equal then  define const house to equal the houses array with [RHIndex];  NEED TO REVIEW THIS FUNCTION AS IT WAS OMITTED FROM MY CODE UNTIL DR T LIVE REVIEW OF DANI'S CODE.  ALSO-never used randomizer function/need to review and understand how it works

//Get all student ID's/creating a new array then sort low to high/also use .map .sort.
//I need help with writing this function - also omitted from my original code and instructions

// create const id = studentIds.length  NEED TO REVIEW THIS OR GET HELP
// studentBuilder(students);


//CREATE const obj w/3 properties: name, house,id then push the obj thru the empty student array


//create button events arrow function/within function body tell the query selector the id.add EL passing click and handlebuttonclick as arg



//create init arrow function/within function body call buttonevents()

//List of student names
// Harry Potter
// Ron Weasley
// Hermione Granger
// Colin Creevey
// Seamus Finnigan
// Hannah Abbott
// Pansy Parkinson
// Ernie Macmillan
// Vincent Crabbe
// Gregory Goyle
// Lavender Brown
// Katie Bell
// Parvati Patil
// Cormac McLaggen
// Neville Longbottom
// Ginny Weasley

// links for pics  https://harrypotter.neoseeker.com/wiki/List_of_students_that_go_to_Hogwarts
