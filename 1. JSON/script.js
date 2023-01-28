// Create a button. When the button is clicked, call the StarWars api for the first person. \
// Print the person name in an **h1** tag. \ Print the person stats in a **table**:
// * Height * Weight * Eye color * Hair color
// **URL:** https://swapi.dev/api/people/1

// BONUS
// make the people selectable from drop down menu where names will be shown, and when a
// person is selected, the h1 and table will be updated

// let btn = document.getElementById("btn");
// document.getElementById("table").style.visibility = "hidden";

// btn.addEventListener("click", () => {
//   fetch("https://swapi.dev/api/people/1").then((data) => {
//     data.json().then((parsedData) => {
//       console.log(parsedData);
//       document.getElementById("name").innerHTML =
//         parsedData.name + "'s stats" + ":";
//       document.getElementById("table").style.visibility = "visible";

//       let row = document.createElement("tr");
//       let td1 = document.createElement("td");
//       let td2 = document.createElement("td");
//       let td3 = document.createElement("td");
//       let td4 = document.createElement("td");

//       td1.innerHTML += `<td> ${parsedData.height} </td> `;
//       td2.innerHTML += `<td> ${parsedData.mass} </td> `;
//       td3.innerHTML += `<td> ${parsedData.hair_color} </td> `;
//       td4.innerHTML += `<td> ${parsedData.skin_color} </td> `;

//       row.appendChild(td1);
//       row.appendChild(td2);
//       row.appendChild(td3);
//       row.appendChild(td4);
//       table.appendChild(row);
//     });
//   });
// });

// BONUS

// let btn = document.getElementById("btn");
// let selectPerson = document.getElementById("selectPerson");
// let table = document.getElementById("table");
// table.style.visibility = "hidden";

// fetch("https://swapi.dev/api/people").then((data) => {
//   data.json().then((parsedData) => {
//     console.log(parsedData);

//     for (item of parsedData.results) {
//       selectPerson.innerHTML += `<option> ${item.name} </option>`;

//     }
//   });
// });

// STAROTO

let btn = document.getElementById("btn");
document.getElementById("table").style.visibility = "hidden";

let selectPerson = document.getElementById("selectPerson");

fetch("https://swapi.dev/api/people").then((data) => {
  data.json().then((parsedData) => {
    console.log(parsedData);

    for (item of parsedData.results) {
      selectPerson.innerHTML += `<option>${item.name}</option>`;

      btn.addEventListener("click", () => {
        document.getElementById("name").innerHTML =
          selectPerson.value + "'s stats" + ":";
        document.getElementById("table").style.visibility = "visible";

        for (let el of parsedData.results(selectedIndex)) {
          let row = document.createElement("tr");
          let td1 = document.createElement("td");
          let td2 = document.createElement("td");
          let td3 = document.createElement("td");
          let td4 = document.createElement("td");

          td1.innerHTML += `<td> ${results.height} </td> `;
          td2.innerHTML += `<td> ${results.mass} </td> `;
          td3.innerHTML += `<td> ${results.hair_color} </td> `;
          td4.innerHTML += `<td> ${results.skin_color} </td> `;

          row.appendChild(td1);
          row.appendChild(td2);
          row.appendChild(td3);
          row.appendChild(td4);
          table.appendChild(row);
        }
      });
    }
  });
});
