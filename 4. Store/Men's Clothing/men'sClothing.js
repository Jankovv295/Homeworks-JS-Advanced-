const url = "https://fakestoreapi.com/products/category/men's clothing";

function setData(key, data) {
  let dataToSave = typeof data == "object" ? JSON.stringify(data) : data;
  sessionStorage.setItem(key, dataToSave);
}

function getData(key) {
  let dataToReturn;
  dataToReturn = sessionStorage.getItem(key);

  try {
    dataToReturn = JSON.parse(dataToReturn);
  } catch (bla) {
    dataToReturn = dataToReturn;
  }
  return dataToReturn;
}

function getDataFromURLorLocal() {
  return new Promise((resolve, reject) => {
    const localData = getData(url);

    if (!localData) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          setData(url, data);
          resolve(data);
          console.log("hehe");
        });
    } else {
      console.log("local");
      resolve(localData);
    }
  });
}
getDataFromURLorLocal().then((data) => {
  console.log(data);

  // el id 0
  document.getElementById("titleBackpack").innerHTML += data[0].title;
  document.getElementById("priceBackpack").innerHTML += data[0].price;
  document.getElementById("ratingBackpack").innerHTML += data[0].rating.rate;
  document.getElementById("descBackpack").innerHTML += data[0].description;

  // el id 1
  document.getElementById("titleSlimFitTshirt").innerHTML += data[1].title;
  document.getElementById("priceSlimFitTshirt").innerHTML += data[1].price;
  document.getElementById("ratingSlimFitTshirt").innerHTML +=
    data[1].rating.rate;
  document.getElementById("descSlimFitTshirt").innerHTML += data[1].description;

  // el id 2
  document.getElementById("titleCottonJacket").innerHTML += data[2].title;
  document.getElementById("priceCottonJacket").innerHTML += data[2].price;
  document.getElementById("ratingCottonJacket").innerHTML +=
    data[2].rating.rate;
  document.getElementById("descCottonJacket").innerHTML += data[2].description;

  // el id 3
  document.getElementById("titleCasualSlimFit").innerHTML += data[3].title;
  document.getElementById("priceCasualSlimFit").innerHTML += data[3].price;
  document.getElementById("ratingCasualSlimFit").innerHTML +=
    data[3].rating.rate;
  document.getElementById("descCasualSlimFit").innerHTML += data[3].description;
});
