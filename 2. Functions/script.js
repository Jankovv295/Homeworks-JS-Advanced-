// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

// Planet Name
// Population
// Climate
// Gravity

// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1

// <!-- Task 2 After the user clicks the button to get the first 10 planets, a button
// should be shown below the table that says: NEXT 10.

// When the button is clicked
// you should make another call and get the next 10 planets and change the table
// contents with information about the next 10 planets.

// After the next 10 planets
// are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should
// appear. The previous button should return the first 10 planets in the table and
// hide the PREVIOUS 10 button and show the NEXT 10 button. **API URL: **
// https://swapi.dev/api/planets/?page=2 -->

let btnSubmit = document.getElementById("btnSubmit");
let btnNext10 = document.getElementById("btnNext10");
let btnPrevious10 = document.getElementById("btnPrevious10");
let tbody = document.getElementById("tbody");

btnNext10.style.visibility = "hidden";
btnPrevious10.style.visibility = "hidden";

let callApi = (url) =>
  fetch(url).then((data) => {
    data.json().then((parsedData) => {
      for (let el of parsedData.results) {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        td1.innerHTML += `<td> ${el.name} </td> `;
        td2.innerHTML += `<td> ${el.population} </td> `;
        td3.innerHTML += `<td> ${el.climate} </td> `;
        td4.innerHTML += `<td> ${el.gravity} </td> `;

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        tbody.appendChild(row);
      }
    });
  });

let callApi2 = (url) =>
  fetch(url).then((data) => {
    data.json().then((parsedData) => {
      for (let el of parsedData.results) {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        td1.innerHTML += `<td> ${el.name} </td> `;
        td2.innerHTML += `<td> ${el.population} </td> `;
        td3.innerHTML += `<td> ${el.climate} </td> `;
        td4.innerHTML += `<td> ${el.gravity} </td> `;

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        tbody.appendChild(row);
      }
    });
  });

btnSubmit.addEventListener("click", () => {
  callApi("https://swapi.dev/api/planets/?page=1");
  btnNext10.style.visibility = "visible";
});

btnNext10.addEventListener("click", () => {
  tbody.innerHTML = "";
  callApi2("https://swapi.dev/api/planets/?page=2");
  btnNext10.style.visibility = "hidden";
  btnPrevious10.style.visibility = "visible";
});

btnPrevious10.addEventListener("click", () => {
  tbody.innerHTML = "";
  callApi("https://swapi.dev/api/planets/?page=1");
  btnPrevious10.style.visibility = "hidden";
  btnNext10.style.visibility = "visible";
});
