const url = "https://fakestoreapi.com/products/category/electronics";

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
  document.getElementById("titleSnowboardJacket").innerHTML += data[0].title;
  document.getElementById("priceSnowboardJacket").innerHTML += data[0].price;
  document.getElementById("ratingSnowboardJacket").innerHTML +=
    data[0].rating.rate;
  document.getElementById("descSnowboardJacket").innerHTML +=
    data[0].description;

  // el id 1
  document.getElementById("titleBikerJacket").innerHTML += data[1].title;
  document.getElementById("priceBikerJacket").innerHTML += data[1].price;
  document.getElementById("ratingBikerJacket").innerHTML += data[1].rating.rate;
  document.getElementById("descBikerJacket").innerHTML += data[1].description;

  // el id 2
  document.getElementById("titleWomenRainJacket").innerHTML += data[2].title;
  document.getElementById("priceWomenRainJacket").innerHTML += data[2].price;
  document.getElementById("ratingWomenRainJacket").innerHTML +=
    data[2].rating.rate;
  document.getElementById("descWomenRainJacket").innerHTML +=
    data[2].description;

  // el id 3
  document.getElementById("titleBoatNeckV").innerHTML += data[3].title;
  document.getElementById("priceBoatNeckV").innerHTML += data[3].price;
  document.getElementById("ratingBoatNeckV").innerHTML += data[3].rating.rate;
  document.getElementById("descBoatNeckV").innerHTML += data[3].description;

  // el id 4
  document.getElementById("titleShortSleeveMoisture").innerHTML +=
    data[4].title;
  document.getElementById("priceShortSleeveMoisture").innerHTML +=
    data[4].price;
  document.getElementById("ratingShortSleeveMoisture").innerHTML +=
    data[4].rating.rate;
  document.getElementById("descShortSleeveMoisture").innerHTML +=
    data[4].description;

  // el id 5
  document.getElementById("titleDANVOUY").innerHTML += data[5].title;
  document.getElementById("priceDANVOUY").innerHTML += data[5].price;
  document.getElementById("ratingDANVOUY").innerHTML += data[5].rating.rate;
  document.getElementById("descDANVOUY").innerHTML += data[5].description;
});
