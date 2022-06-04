var myNameDiv = document.querySelector('#name');
var myButton = document.querySelector('#my-button');
var myInput = document.querySelector('#my-input');
var mySecondInput = document.querySelector('#my-second-input');
var printButton = document.querySelector('#print-button');
var myName = localStorage.getItem('name');

var myNameEl = document.createElement('p');
myNameEl.innerText = myName;
myNameDiv.appendChild(myNameEl);

myButton.addEventListener('click', function (event) {
  event.preventDefault();
  var name = myInput.value;
  var emailAddress = mySecondInput.value;
  var myArray = { name, emailAddress };
  localStorage.setItem('myObj', JSON.stringify(myArray));
});

printButton.addEventListener('click', function (event) {
  event.preventDefault();
  var localStorageItem = JSON.parse(localStorage.getItem('myObj'));
  console.log(localStorageItem.emailAddress);
});
