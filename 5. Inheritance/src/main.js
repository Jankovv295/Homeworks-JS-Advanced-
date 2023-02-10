import Horse from "./models/animal/horse.js";
import Pudlica from "./models/animal/pudlica.js";
import Sarplaninec from "./models/animal/sarplaninec.js";
import StarZenskiSarplaninec from "./models/animal/starZenskiSarplaninec.js";
import Farmer from "./models/human/farmer.js";
import Human from "./models/human/human.js";
import Musician from "./models/human/musician.js";
import Politician from "./models/human/politician.js";

// console.log('Main class');

// const horse1 = new Horse('Goce', 7, 'Male');

// // console.log(horse1);

// horse1.die();

// const sarplaninec1 = new Sarplaninec('Sarko', 5, 'Male');

// sarplaninec1.bark();

// console.log(sarplaninec1);

const pudlica1 = new Pudlica("Kiko", 5, undefined);
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.die("crkni");
// pudlica1.bark("gaf gaf gaf");

// pudlica1.comeAlive();

// console.log("bark");
// pudlica1.bark();
// // sarplaninec1.bark();
// setTimeout(() => {
//   pudlica1.die();
//   console.log("bark ends");
// }, 10000);

// console.log(horse1);
// const starZenskiSarplaninec = new StarZenskiSarplaninec("Lajka", 11);
// console.log(starZenskiSarplaninec);

// ---------------------------------------------------------------- //

// DOMASNO

// 1. Add printSpecs method to all mammals that will print out their properties,
// BONUS: Make it to print all properties in single loop

// let miki = new Horse("Miki", 12, "Male");
// miki.printSpecs();

// // 2.Create a human class and extend it from Mammal, add properties and methods unique to all humans

// // pudlica1 e od pogore od primerite
// let pero = new Human("Pero", 21, "Male", "Mood Swings", pudlica1);
// pero.sneezes();
// pero.singing();
// console.log(pero);

// ------------------------------------------------------------------ //

// 3. extend 3 other classes of the human that will have their own methods (Worker, Musician, Artist, Farmer etc..)

// // farmer
// let peco = new Farmer("Peco", 45, "Male", "bele ruze", false);
// peco.callsASheep();
// peco.drivesATractor();
// console.log(peco);

// politician
// let aleks = new Politician("Aleks", 55, "Male", "pesna", false);
// aleks.promising();
// console.log(aleks);

// musician
// let zorica = new Musician(
//   "Zorica",
//   25,
//   "Female",
//   "od Mozzart nesto",
//   "chivava"
// );
// zorica.singsOpera();
// zorica.spinsLikeBalerine();
// console.log(zorica);
// zorica.printSpecs();
