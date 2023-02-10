const url = "https://fakestoreapi.com/products/category/jewelery";

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
  // element id 0
  document.getElementById("titleJohnHardyBracelet").innerHTML += data[0].title;
  document.getElementById("priceJohnHardyBracelet").innerHTML += data[0].price;
  document.getElementById("ratingJohnHardyBracelet").innerHTML +=
    data[0].rating.rate;
  document.getElementById("descJohnHardyBracelet").innerHTML +=
    data[0].description;

  //   element id 1
  document.getElementById("titleSolidGoldPetite").innerHTML += data[1].title;
  document.getElementById("priceSolidGoldPetite").innerHTML += data[1].price;
  document.getElementById("ratingSolidGoldPetite").innerHTML +=
    data[1].rating.rate;
  document.getElementById("descSolidGoldPetite").innerHTML +=
    data[1].description;

  //   element id 2
  document.getElementById("titleWhiteGoldPrincess").innerHTML += data[2].title;
  document.getElementById("priceWhiteGoldPrincess").innerHTML += data[2].price;
  document.getElementById("ratingWhiteGoldPrincess").innerHTML +=
    data[2].rating.rate;
  document.getElementById("descWhiteGoldPrincess").innerHTML +=
    data[2].description;

  //   element id 3
  document.getElementById("titlePiercedOwl").innerHTML += data[3].title;
  document.getElementById("pricePiercedOwl").innerHTML += data[3].price;
  document.getElementById("ratingPiercedOwl").innerHTML += data[3].rating.rate;
  document.getElementById("descPiercedOwl").innerHTML += data[3].description;
});
