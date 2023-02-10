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
          console.log("fetch");
        });
    } else {
      console.log("local");
      resolve(localData);
    }
  });
}
getDataFromURLorLocal().then((data) => {
  console.log(data);

  // el 0
  document.getElementById("titleWDHardDrive").innerHTML += data[0].title;
  document.getElementById("priceWDHardDrive").innerHTML += data[0].price + "$";
  document.getElementById("descWDHardDrive").innerHTML += data[0].description;
  document.getElementById("ratingEl0").innerHTML += data[0].rating.rate;

  // el 1
  document.getElementById("titleSanDisk").innerHTML += data[1].title;
  document.getElementById("priceSanDisk").innerHTML += data[1].price + "$";
  document.getElementById("descSanDisk").innerHTML += data[1].description;
  document.getElementById("ratingEl1").innerHTML += data[1].rating.rate;

  // el 2
  document.getElementById("titleSiliconPower").innerHTML += data[2].title;
  document.getElementById("priceSiliconPower").innerHTML += data[2].price + "$";
  document.getElementById("descSiliconPower").innerHTML += data[2].description;
  document.getElementById("ratingEl2").innerHTML += data[2].rating.rate;

  // el 3
  document.getElementById("titlePS4HardDrive").innerHTML += data[3].title;
  document.getElementById("pricePS4HardDrive").innerHTML += data[3].price + "$";
  document.getElementById("descPS4HardDrive").innerHTML += data[3].description;
  document.getElementById("ratingEl3").innerHTML += data[3].rating.rate;

  // el 4
  document.getElementById("titleAcer").innerHTML += data[4].title;
  document.getElementById("priceAcer").innerHTML += data[4].price + "$";
  document.getElementById("descAcer").innerHTML += data[4].description;
  document.getElementById("ratingEl4").innerHTML += data[4].rating.rate;

  // el 5
  document.getElementById("titleSamsungMonitor").innerHTML += data[5].title;
  document.getElementById("priceSamsungMonitor").innerHTML +=
    data[5].price + "$";
  document.getElementById("descSamsungMonitor").innerHTML +=
    data[5].description;
  document.getElementById("ratingEl5").innerHTML += data[5].rating.rate;
});

// shopping cart
let cartBtnWDHardDrive = document.getElementById("cartBtnWDHardDrive");
let cartBtnSanDisk = document.getElementById("cartBtnSanDisk");
let cartBtnSiliconPower = document.getElementById("cartBtnSiliconPower");
let cartBtnPS4HardDrive = document.getElementById("cartBtnPS4HardDrive");
let cartBtnAcer = document.getElementById("cartBtnAcer");
let cartBtnSamsungMonitor = document.getElementById("cartBtnSamsungMonitor");

class ShoppingCartElement {
  constructor(name) {
    this.name = name;
  }
}

// el 0
cartBtnWDHardDrive.addEventListener("click", () => {
  let WDHardDrive = new ShoppingCartElement(
    "WD 2TB Elements Portable External Hard Drive - USB 3.0"
  );
  console.log(
    "Производот: WD 2TB Elements Portable External Hard Drive - USB 3.0 е додаден во кошничката"
  );

  localStorage.setItem("shoppingCart", JSON.stringify(WDHardDrive));
});

// el 1
cartBtnSanDisk.addEventListener("click", () => {
  let SanDisk = new ShoppingCartElement(
    "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"
  );
  console.log(
    "Производот: SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s  е додаден во кошничката"
  );

  localStorage.setItem("shoppingCart", JSON.stringify(SanDisk));
});

// el 2
cartBtnSiliconPower.addEventListener("click", () => {
  let SiliconPower = new ShoppingCartElement(
    "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
  );
  console.log(
    "Производот: Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5 е додаден во кошничката"
  );

  localStorage.setItem("shoppingCart", JSON.stringify(SiliconPower));
});

// el 3
cartBtnPS4HardDrive.addEventListener("click", () => {
  let PS4HardDrive = new ShoppingCartElement(
    "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
  );
  console.log(
    "Производот: WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive е додаден во кошничката"
  );

  localStorage.setItem("shoppingCart", JSON.stringify(PS4HardDrive));
});

// el 4
cartBtnAcer.addEventListener("click", () => {
  let Acer = new ShoppingCartElement(
    "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
  );
  console.log(
    "Производот: Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin е додаден во кошничката"
  );

  localStorage.setItem("shoppingCart", JSON.stringify(Acer));
});

// el 5
cartBtnSamsungMonitor.addEventListener("click", () => {
  let SamsungMonitor = new ShoppingCartElement(
    "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED"
  );
  console.log(
    "Производот: Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED е додаден во кошничката"
  );

  localStorage.setItem("shoppingCart", JSON.stringify(SamsungMonitor));
});
